import styled from 'styled-components';

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 40,

  '&> :first-child': {
    flexBasis: '300px',
    flexGrow: 1,
    borderRight: '1px solid #efefef',
    minHeight: '100vh',
    padding: '2em',
    '& h2': {
      fontSize: '40px',
      fontWeight: 600,
    },
  },
  '&> :last-child': {
    paddingTop: '2em',
    flexBasis: 0,
    flexGrow: 999,
    minInlineSize: '50%',
  },
});

export default Wrapper;
