import styled from '@emotion/styled';
import { Layout, Row as AntRow, Col as AntCol, Divider, Typography } from 'antd';

export const LayoutFooter = styled(Layout.Footer)`
  padding: 100px 12px 0 12px;
  background-color: var(--black);
`;

export const Row = styled(AntRow)`
  max-width: 1280px;
  margin: 0 auto !important;
`;

export const Col = styled(AntCol)`
  padding-bottom: 80px;
`;

export const Title = styled(Typography.Title)`
  font-size: 30px !important;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text-primary) !important;
`;

export const Address = styled(AntCol)`
  margin-bottom: 40px;
`;

export const Subtitle = styled(Typography.Title)`
  color: var(--text-primary) !important;
  margin: 0 !important;
`;

export const Text = styled(Typography.Text)`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: var(--text-secondary);
`;

export const Link = styled(Typography.Link)`
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline !important;
  color: var(--link-primary);
`;

export const Social = styled(Text)`
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled.div`
  display: inline-block;
  line-height: 1;
  padding-right: 10px;
`;

export const NewLine = styled(Divider)`
  align-self: center;
  opacity: 0.4;
  margin-top: 0;
  margin-bottom: 50px;
  background-color: var(--border-secondary);
`;

export const Copyright = styled(Typography.Text)`
  display: block;
  font-size: 22px;
  color: var(--text-secondary);
  padding-bottom: 25px;
`;

export const Rights = styled(Typography.Text)`
  display: block;
  font-size: 18px;
  color: var(--text-secondary);
  padding-bottom: 50px;
`;
