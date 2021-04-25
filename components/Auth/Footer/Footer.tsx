import { FC } from 'react';
import moment from 'moment';

import Image from 'next/image';
// To Do
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import FacebookLogin from 'react-facebook-login';

import { Link, LoginButton, NewLine, Rights, Text, SocialButton } from './Footer.style';

export interface FooterProps {
  type: string;
}

const Footer: FC<FooterProps> = ({ children, type }) => {
  return (
    <>
      {type == 'register' && (
        <Text>
          By Signing up you agree you&apos;ve read and accept our
          <Link href="#">Terms & Conditions</Link> and <Link href="#">Privacy Policy</Link>
        </Text>
      )}
      {children}
      {type != 'forgot-password' && (
        <>
          <LoginButton>
            {type == 'register' ? 'Already have an account?' : "Don't have an account?"}
          </LoginButton>

          <NewLine plain>OR</NewLine>
          <SocialButton
            icon={<Image src="/assets/icons/socials/google.svg" width={20} height={20} />}>
            Continue with Google
          </SocialButton>
          <SocialButton
            icon={<Image src="/assets/icons/socials/facebook.svg" width={20} height={20} />}>
            Continue with Facebook
          </SocialButton>
        </>
      )}
      {/* <FacebookLogin */}
      {/*  appId="1088597931155576" */}
      {/*  autoLoad */}
      {/*  fields="name,email,picture" */}
      {/*  onClick={() => null} */}
      {/*  callback={(res) => console.log('res', res)} */}
      {/* /> */}
      <Rights>&copy; {moment().year()} Boostroom. All rights reserved.</Rights>
    </>
  );
};
export default Footer;
