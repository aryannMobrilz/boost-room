import styled from '@emotion/styled';
import { Button, Divider, Typography } from 'antd';

export const Text = styled(Typography.Text)`
  font-size: 12px;
  display: inline-block;
  margin-bottom: 40px;
`;

export const Link = styled(Typography.Link)`
  color: var(--link-primary) !important;
  text-decoration: underline !important;
`;

export const LoginButton = styled(Button)`
  display: inline-block;
  width: 100%;
  color: var(--light-blue);
  border-color: var(--light-blue);
  height: auto;
  margin-bottom: 10px;
  font-weight: bold;
  padding: 13px 0 !important;
`;

export const NewLine = styled(Divider)`
  margin-top: 20px !important;
  margin-bottom: 30px !important;
`;

export const SocialButton = styled(Button)`
  display: flex;
  align-items: center;
  padding-left: 80px;
  padding-top: 13px;
  padding-bottom: 13px;
  width: 100%;
  margin-bottom: 10px;
  color: var(--text-tertiary);
  border: 1px solid var(--outline-primary);
  height: auto;

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
