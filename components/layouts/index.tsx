import * as React from 'react';
import Wrapper from './components/wrapper';
export default ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};
