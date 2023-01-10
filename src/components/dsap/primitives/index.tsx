import styled from 'styled-components';

export const DsapTitle = styled.div({
  borderBottom: '1px solid #000',
  padding: '1em'
});

export const QuestionCounterWrap = styled.div({
  borderBottom: '1px solid #000',
  padding: '1em',
  display: 'flex',
  justifyContent: 'space-between'
});

export const NextQuestionButton = styled.a({
  cursor: 'pointer',
  fontSize: '1em',
  lineHeight: '1.5em',
  padding: '0.2em 1em',
  '&:hover': {
    background: '#efefef'
  }
});

export const QuestionPromptWrap = styled.div({
  borderBottom: '1px solid #000',
  padding: '1em'
});