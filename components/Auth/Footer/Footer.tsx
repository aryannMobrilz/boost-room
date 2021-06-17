import { FC } from 'react';
import { signIn } from 'next-auth/client';
import moment from 'moment';

import Image from 'next/image';
import { Link, LoginButton, NewLine, Rights, Text, SocialButton } from './Footer.style';

export interface FooterProps {
  type: string;
}

const Footer: FC<FooterProps> = ({ children, type }) => {
  const handleGoogleLogin = async () => {
    await signIn('google');
  };

  const handleFacebookLogin = async () => {
    await signIn('facebook');
  };

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
            icon={<Image src="/assets/icons/socials/google.svg" width={20} height={20} />}
            onClick={handleGoogleLogin}>
            Continue with Google
          </SocialButton>
          <SocialButton
            icon={<Image src="/assets/icons/socials/facebook.svg" width={20} height={20} />}
            onClick={handleFacebookLogin}>
            Continue with Facebook
          </SocialButton>
        </>
      )}
      <Rights>&copy; {moment().year()} Boostroom. All rights reserved.</Rights>
    </>
  );
};
export default Footer;
