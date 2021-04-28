import { FC } from 'react';

import { Container } from './ContactUsContainer.style';

export interface AuthContainerProps {
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | undefined;
}

const ContactUsContainer: FC<AuthContainerProps> = ({ children, justify }) => {
  return <Container justify={justify}>{children}</Container>;
};

export default ContactUsContainer;
