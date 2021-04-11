import styled from '@emotion/styled';
import { Button, Typography } from 'antd';

export const Text = styled(Typography.Text)`
  font-size: 12px;
  display: inline-block;
  margin-bottom: 40px;
`;

export const Link = styled(Typography.Link)`
  color: var(--link-primary) !important;
  text-decoration: underline !important;
`;

export const RegisterButton = styled(Button)`
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
`;

export const LoginButton = styled(Button)`
  display: inline-block;
  width: 100%;
  color: var(--light-blue);
  border-color: var(--light-blue);
`;

export const SocialButton = styled(Button)`
  display: flex;
  align-items: center;
  padding-left: 20%;
  width: 100%;
  margin-bottom: 10px;
  color: var(--light-blue);
  border-color: var(--light-blue);

  div {
    margin-right: 12px;
  }
`;

export const Rights = styled(Typography.Text)`
  display: inline-block;
  font-size: 12px;
  margin-top: 20px;
  color: var(--text-secondary);
`;
