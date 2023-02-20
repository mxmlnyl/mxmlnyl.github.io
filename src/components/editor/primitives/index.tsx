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

export const ResultWrap = styled.div({
  display: 'flex',
  flexDirection: 'row',
  margin: '1em',
});

export const ResultItem = styled.div((props: {success: boolean}) => ({
  width: '25%',
  borderRadius: '0.3em',
  border: `1px solid ${props.success ? '#a3cfbb' : '#f1aeb5'}`,
  marginRight: '1em',
  marginBottom: '1em',
}));

export const ResultItemHeader = styled.div((props: {success: boolean}) => ({
  padding: '1em',
  // success text color #146c43
  backgroundColor: `${props.success ? '#d1e7dd' : '#f8d7da'}`,
  '& span': {
    backgroundColor: 'whitesmoke',
    paddingLeft: '1em',
    paddingRight: '1em',
    marginLeft: '1em',
  },
}));

export const ResultBody = styled.div({
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  '& span span': {
    width: '100%',
    backgroundColor: 'whitesmoke',
    display: 'inline-block',
    padding: '0.5em',
  },
});

export const OutputWrap = styled.div({
  padding: '1em',
  background: '#efefef',
});
