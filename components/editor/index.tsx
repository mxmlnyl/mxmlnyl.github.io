import React, { useState } from 'react';
import ts from 'typescript';
import Editor from '@monaco-editor/react';
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
  const editorRef = React.useRef<EditorType | null>(null);

  const SetRef = (editor: EditorType) => {
    editorRef.current = editor;
  };

  return (
    <>
      <Editor
        height={height}
        defaultLanguage="typescript"
        defaultValue={code}
        onMount={SetRef}
      />
    </>
  );
};

export default EditorComponent;
