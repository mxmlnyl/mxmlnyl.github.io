import styled from "styled-components";

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 40,
  padding: '1em',
  '&> :first-child': {
    flexBasis: '300px', 
    flexGrow: 1,
  },
  '&> :last-child': {
    flexBasis: 0,
    flexGrow: 999,
    minInlineSize: '50%',
  }
});

export default Wrapper;