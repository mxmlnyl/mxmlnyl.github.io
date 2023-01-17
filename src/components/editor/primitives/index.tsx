import styled from 'styled-components';

export const EditorWrap = styled.div({
  fontFamily: 'Source Code Pro',
});

export const ActionButtonWrap = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1em',
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
});

export const RunButton = styled.div({
  background: 'black',
  color: 'white',
  padding: '0.5em',
  display: 'flex',
  cursor: 'pointer',
});
