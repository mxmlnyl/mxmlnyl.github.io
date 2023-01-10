import React, { useState } from 'react';
import ts from 'typescript';
import Editor from '@monaco-editor/react';
import { ActionButtonWrap, RunButton } from './primitives';

type EditorType = { getValue: () => string };

const EditorComponent = ({
  code,
  height = '500px',
  editable = true,
  test = false,
}: {
  code: string;
  test: boolean;
  height: string;
  editable?: boolean;
}) => {
  const [output, setOutput] = useState<Boolean | string>(false);
  const editorRef = React.useRef<EditorType | null>(null);

  const runCode = (): void => {
    const value = editorRef.current?.getValue();
    const transpiledCode = ts.transpile(value ?? "");

    const newFNSTR: string = `
      const logger = ${Logger};
      const newConsole = new logger();
      ${transpiledCode};
      return newConsole.queue;
    `;

    const test = new Function(newFNSTR);
    const results = test();
    setOutput(results.join("\n"));
  };

  const SetRef = (editor: EditorType) => {
    editorRef.current = editor;
  };

  const clearResults = (): void => {
    setOutput(false);
  };

  return (
    <>
      <Editor
        height={height}
        defaultLanguage="typescript"
        defaultValue={code}
        onMount={SetRef}
      />


      <ActionButtonWrap>
        <RunButton>Run Code</RunButton>
        <RunButton>Test Code</RunButton>
      </ActionButtonWrap>

    </>
  );
};

export default EditorComponent;
