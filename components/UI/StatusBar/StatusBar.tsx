import { FC } from 'react';

import { Container } from './StatusBar.stye';

const StatusBar: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default StatusBar;
