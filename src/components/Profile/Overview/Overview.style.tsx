import Image from 'next/image';
import { Col, Row, Typography } from 'antd';
import styled from '@emotion/styled';

export const Container = styled(Row)`
  background-color: var(--white);
  padding: 30px;
`;

export const Cover = styled(Image)`
  display: block;
  width: 137px;
  height: 132px;
  border-radius: 13px;
`;

export const UserInfo = styled(Col)`
  padding-left: 30px;
`;

export const Title = styled(Typography.Title)`
  margin: 0 !important;
  text-transform: uppercase;
  line-height: 1;
`;

export const Subtitle = styled(Typography.Title)`
  margin: 0 !important;
  line-height: 1;
`;

export const Info = styled.span`
  font-weight: normal;
`;

export const StatTitle = styled(Typography.Text)`
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
  color: var(--text-secondary);
`;

export const StatContent = styled(Typography.Text)`
  display: block;
  font-size: 42px;
`;
