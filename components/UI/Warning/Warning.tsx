import { FC } from 'react';

import Image from 'next/image';
import { Container, Text } from './Warning.style';

export interface WarningProps {
  icon: string;
}

const Warning: FC<WarningProps> = ({ children, icon }) => {
  return (
    <Container>
      <Image src={icon} height={18} width={18} />
      <Text>{children}</Text>
    </Container>
  );
};

export default Warning;
