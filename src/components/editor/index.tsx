import React, {useState} from 'react';
import ts from 'typescript';
import Editor from '@monaco-editor/react';
import {js as Beautify} from 'js-beautify';
import IsEqual from 'lodash.isequal';
import {
  EditorWrap,
  ActionButtonWrap,
  RunButton,
  ResultWrap,
  ResultItem,
  ResultItemHeader,
  ResultBody,
} from './primitives';
import {Question} from '@questions/index';

const options = {indent_size: 2, space_in_empty_paren: true};
type EditorType = {getValue: () => string};

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
  const [testResults, setTestResults] = useState<
    {test: string; expected: string; received: string; result: boolean}[] | null
  >(null);
  const editorRef = React.useRef<EditorType | null>(null);

  const getCodeRunner = (injectedCode: string = '') => {
    const value = editorRef.current?.getValue();
    const transpiledCode = ts.transpile(value ?? '');
    const testCode = `
      ${transpiledCode}
      ${injectedCode}
    `;

    return new Function(testCode)();
  };

  const testCode = (): void => {
    const testCodeRunner = getCodeRunner(`return ${question.testName};`);
    const testResults = question.testInputs?.map((input, idx) => {
      const testResult = testCodeRunner(...input);
      const testExpect = question.tests[idx];

      return {
        test: `${input}`,
        expected: `${testExpect}`,
        received: `${testResult}`,
        result: IsEqual(testResult, testExpect),
      };
    });
    setTestResults(testResults);
  };

  const SetRef = (editor: EditorType) => {
    editorRef.current = editor;
  };

  const clearResults = (): void => {
    setTestResults(null);
  };

  const results = React.useMemo(() => {
    if (!testResults) return null;
    return testResults.map((result, idx) => {
      return (
        <ResultItem key={`result-${idx}`} success={result.result}>
          <ResultItemHeader success={result.result}>
            Test <span>{idx + 1}</span>
          </ResultItemHeader>
          <ResultBody>
            <span>
              Input: <br />
              <span>{result.test}</span>
            </span>
            <span>
              Expected: <br />
              <span>{result.expected}</span>
            </span>
            <span>
              Received: <br />
              <span>{result.received}</span>
            </span>
          </ResultBody>
        </ResultItem>
      );
    });
  }, [testResults]);

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
        <RunButton onClick={clearResults}>Test Code</RunButton>
        <RunButton onClick={testCode}>Test Code</RunButton>
      </ActionButtonWrap>

      <ResultWrap>{results}</ResultWrap>
    </>
  );
};

export default EditorComponent;
