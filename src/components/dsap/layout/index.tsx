import * as React from 'react';
import Wrapper from './primitives/twoColWrapper';
export default ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};
