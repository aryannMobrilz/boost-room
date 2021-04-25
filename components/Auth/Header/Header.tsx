import { FC } from 'react';

import { Title, Subtitle, Text } from './Header.style';

export interface HeaderProps {
  type: string;
}

const Header: FC<HeaderProps> = ({ type }) => {
  return (
    <>
      <Subtitle>Boostroom</Subtitle>
      <Title> {type == 'register' ? 'Create Your Account' : 'Access Your Account'}</Title>
      <Text>
        {type == 'register'
          ? 'Enter your information and become member of our ultimate gaming experience'
          : 'Get started with professional boosting experience just for you!'}
      </Text>
    </>
  );
};

export default Header;
