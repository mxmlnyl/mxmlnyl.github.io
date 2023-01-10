import styled from 'styled-components';

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  //gap: '1em',
  '&> :first-child': {
    flexBasis: '275px',
    flexGrow: 1,
    borderRight: '1px solid #efefef',
    minHeight: '100vh',

  },
  '&> :last-child': {
    paddingTop: '1em',
    flexBasis: 0,
    flexGrow: 999,
    minInlineSize: '50%',
  },
});

export default Wrapper;
