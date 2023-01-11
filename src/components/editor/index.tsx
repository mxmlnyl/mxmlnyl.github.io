import React, { useState } from 'react';
import ts from 'typescript';
import Editor from '@monaco-editor/react';
import { js as Beautify } from 'js-beautify';
import IsEqual from 'lodash.isequal';
import { EditorWrap, ActionButtonWrap, RunButton } from './primitives';
import { Question } from '@questions/index';

const options = { indent_size: 2, space_in_empty_paren: true };
type EditorType = { getValue: () => string };

const EditorComponent = ({
  code,
  height = '500px',
  editable = true,
  test = false,
  question,
}: {
  code?: string;
  test: boolean;
  height: string;
  editable?: boolean;
  question: Question;
}) => {
  const [output, setOutput] = useState<Boolean | string>(false);
  const editorRef = React.useRef<EditorType | null>(null);

  const runCode = (): void => {
    const value = editorRef.current?.getValue();
    const transpiledCode = ts.transpile(value ?? '');
    const testCode = `
      ${transpiledCode}
      return ${question.testName};
    `;

    const testCodeRunner = new Function(testCode)();

    question.testInputs?.forEach((input, idx) => {
      const testResult = testCodeRunner(...input);
      const testExpect = question.tests[idx];
      console.log({ testExpect });
      console.log({ testResult });
      console.log(IsEqual(testResult, testExpect));
    });
  };

  const SetRef = (editor: EditorType) => {
    editorRef.current = editor;
  };

  const clearResults = (): void => {
    setOutput(false);
  };

  return (
    <>
      <EditorWrap>
        <Editor
          height={height}
          defaultLanguage="typescript"
          defaultValue={Beautify(test ? question.boilerPlate : code, options)}
          onMount={SetRef}
        />
      </EditorWrap>

      <ActionButtonWrap>
        <RunButton onClick={runCode}>Run Code</RunButton>
        <RunButton>Test Code</RunButton>
      </ActionButtonWrap>
    </>
  );
};

export default EditorComponent;
