import styled from '@emotion/styled';
import { Layout, Typography } from 'antd';

export const LayoutFooter = styled(Layout.Footer)`
  background-color: var(--primary);
`;

export const Title = styled(Typography.Title)`
  font-size: 30px !important;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text-primary) !important;
`;

export const Subtitle = styled(Typography.Title)`
  color: var(--text-primary) !important;
`;

export const Text = styled(Typography.Text)`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: var(--text-secondary);
`;

export const Paragraph = styled(Typography.Paragraph)``;

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
