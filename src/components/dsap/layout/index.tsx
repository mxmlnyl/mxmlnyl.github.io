import * as React from 'react';
import Wrapper from './primitives/twoColWrapper';

const Layout = ({children}: {children: React.ReactNode}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
