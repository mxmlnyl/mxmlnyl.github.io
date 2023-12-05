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
  OutputWrap,
} from './primitives';
import {Question} from '@questions/index';
import Logger from './util/logger';

const options = {indent_size: 2, space_in_empty_paren: true, matchBrackets: 'always'};
type EditorType = {getValue: () => string, getModel: () => ({ setValue: (val: any) => any})};

const EditorComponent = ({
  code,
  height = '500px',
  editable = true,
  testName,
  testInputs,
  testExpects,
  test = false,
  question,
}: {
  code?: string;
  test: boolean;
  height: string;
  editable?: boolean;
  question?: Question;
  testName?: string | undefined;
  testInputs?: Array<any>;
  testExpects?: Array<any>;
}) => {
  const [output, setOutput] = useState<null | string>(null);
  const [testResults, setTestResults] = useState<
    ({test: string; expected: string; received: string; result: boolean} | undefined)[] | undefined
  >(undefined);
  const editorRef = React.useRef<EditorType | null>(null);

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getModel().setValue(code ?? '');
    }
  }, [code]);


  const getCodeRunnerString = ({
    injectedPrefix,
    injectedSuffix,
  }: {
    injectedPrefix?: string;
    injectedSuffix?: string;
  }) => {
    const value = editorRef.current?.getValue();
    const transpiledCode = ts.transpile(value ?? '', {
      alwaysStrict: true,
    });
    return `
      ${injectedPrefix ?? ''}
      ${transpiledCode}
      ${injectedSuffix ?? ''}
    `;
  };

  const testCode = (): void => {
    if (!testExpects) return;
    const codeRunner = getCodeRunnerString({});
    const testResults = testInputs?.map((input, idx) => {
      const testCode = `
        ${codeRunner}
        ${testName}(...input);
      `;
      try {
        const testResult = eval(testCode);
        const currentExpect = testExpects[idx];

        return {
          test: `${input}`,
          expected: `${currentExpect}`,
          received: `${testResult}`,
          result: IsEqual(testResult, currentExpect),
        };
      } catch (e) {
        console.log(e);
      }
    });

    if (testResults) {

      setTestResults(testResults);
    }
  };

  const runCode = (): void => {
    const codeRunner = getCodeRunnerString({
      injectedPrefix: Logger,
      injectedSuffix: 'return newConsole.queue;',
    });

    const runner = new Function(codeRunner);
    const result = runner();

    setOutput(result.join('\n'));
  };

  const SetRef = (editor: EditorType) => {
    editorRef.current = editor;
  };

  const clearResults = (): void => {
    setTestResults(undefined);
  };

  const clearOutput = (): void => {
    setOutput(null);
  };

  const results = React.useMemo(() => {
    if (!testResults) return null;
    return testResults.map((result, idx) => {
      if (!result) return null;
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
          defaultValue={Beautify( code, options)}
          // @ts-ignore-next-line
          onMount={SetRef}
        />
      </EditorWrap>

      <ActionButtonWrap>
        <RunButton onClick={clearOutput}>Clear Output</RunButton>
        <RunButton onClick={runCode}>Run Code</RunButton>
        <RunButton onClick={testCode}>Test Code</RunButton>
        <RunButton onClick={clearResults}>Clear Test Results</RunButton>
      </ActionButtonWrap>

      <ResultWrap>{results}</ResultWrap>
      {output ? <OutputWrap>{output}</OutputWrap> : null}
    </>
  );
};

export default EditorComponent;
