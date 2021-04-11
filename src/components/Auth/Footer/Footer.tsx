import { FC } from 'react';
import Image from 'next/image';

import { Divider } from 'antd';

import { Link, LoginButton, RegisterButton, Rights, Text, SocialButton } from './Footer.style';

import googleSVG from '@/assets/icons/socials/google.svg';
import facebookSVG from '@/assets/icons/socials/facebook.svg';

const Footer: FC = () => {
  return (
    <>
      <Text>
        By Signing up you agree you&apos;ve read and accept our
        <Link href="#">Terms & Conditions</Link> and <Link href="#">Privacy Policy</Link>
      </Text>
      <RegisterButton type="primary">Sign up</RegisterButton>
      <LoginButton>Already have an account?</LoginButton>
      <Divider plain>OR</Divider>
      <SocialButton icon={<Image src={googleSVG} width={20} height={20} />}>
        Continue with Google
      </SocialButton>
      <SocialButton icon={<Image src={facebookSVG} width={20} height={20} />}>
        Continue with Facebook
      </SocialButton>
      <Rights>&copy; 2020 Boostroom. All rights reserved.</Rights>
    </>
  );
};

export default Footer;
