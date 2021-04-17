import { FC } from 'react';

import Image from 'next/image';
// To Do
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Divider } from 'antd';

import { Link, LoginButton, Rights, Text, SocialButton } from './Footer.style';

const Footer: FC = ({ children }) => {
  return (
    <>
      <Text>
        By Signing up you agree you&apos;ve read and accept our
        <Link href="#">Terms & Conditions</Link> and <Link href="#">Privacy Policy</Link>
      </Text>
      {children}
      <LoginButton>Already have an account?</LoginButton>
      <Divider plain>OR</Divider>
      <SocialButton icon={<Image src="/assets/icons/socials/google.svg" width={20} height={20} />}>
        Continue with Google
      </SocialButton>
      {/* <FacebookLogin */}
      {/*  appId="291105585873600z" */}
      {/*  autoLoad={false} */}
      {/*  fields="name,email,picture" */}
      {/*  onClick={() => console.log('clicked')} */}
      {/*  callback={(res) => console.log('res', res)} */}
      {/*  render={(props) => ( */}
      {/*    <SocialButton */}
      {/*      icon={<Image src="/assets/icons/socials/facebook.svg" width={20} height={20} />} */}
      {/*      onClick={props.onClick}> */}
      {/*      Continue with Facebook */}
      {/*    </SocialButton> */}
      {/*  )} */}
      {/* /> */}
      <Rights>&copy; 2020 Boostroom. All rights reserved.</Rights>
    </>
  );
};

export default Footer;
