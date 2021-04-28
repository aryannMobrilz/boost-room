import { FC } from 'react';

import Image from 'next/image';
import { Container, Info, Title } from './ContactCard.style';

export interface ContactCardProps {
  icon: string;
  title: string;
  contact: string;
  alternativeContact?: string;
}

const ContactCard: FC<ContactCardProps> = ({ icon, title, contact, alternativeContact }) => {
  return (
    <Container>
      <Image src={icon} height={50} width={50} />
      <Info>
        <Title>{title}</Title>
        {contact}
        <br />
        {alternativeContact}
      </Info>
    </Container>
  );
};

export default ContactCard;
