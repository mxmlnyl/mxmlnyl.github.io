import * as React from 'react';

import {HomeWrapper} from './primitives';
type Props = {children: React.ReactElement};

const HomeLayout: React.FC<Props> = ({children}: Props) => {
  return <HomeWrapper>{children}</HomeWrapper>;
};

export default HomeLayout;
