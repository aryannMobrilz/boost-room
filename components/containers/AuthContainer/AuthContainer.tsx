import { FC } from 'react';

import { Container } from './AuthContainer.style';

export interface AuthContainerProps {
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | undefined;
}

const AuthContainer: FC<AuthContainerProps> = ({ children, justify }) => {
  return <Container justify={justify}>{children}</Container>;
};

export default AuthContainer;
