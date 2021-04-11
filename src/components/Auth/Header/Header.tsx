import { FC } from 'react';

import { Typography } from 'antd';

import { Text } from './Header.style';

const Header: FC = () => {
  return (
    <>
      <Typography.Title level={5}>Boostroom</Typography.Title>
      <Typography.Title level={4}>Create Your Account</Typography.Title>
      <Text>Enter your information and become member of our ultimate gaming experience</Text>
    </>
  );
};

export default Header;
