import { FC } from 'react';

import { Container } from './CommonContainer.style';

export interface AuthContainerProps {
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | undefined;
}

const CommonContainer: FC<AuthContainerProps> = ({ children, justify }) => {
  return <Container justify={justify}>{children}</Container>;
};

export default CommonContainer;
