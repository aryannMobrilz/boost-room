import Image from 'next/image';
import { Col, Row, Typography } from 'antd';
import styled from '@emotion/styled';

type StatContentProps = {
  color: string;
};

export const Container = styled(Row)`
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px var(--border-primary);
  background-color: var(--white);
`;

export const CoverContainer = styled(Col)`
  height: 132px;
`;

export const Cover = styled(Image)`
  display: block;
  width: 137px;
  height: 132px;
  border-radius: 13px;
`;

export const UserInfo = styled(Col)`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StatsRow = styled(Row)`
  padding-top: 24px;
`;

export const Title = styled(Typography.Title)`
  margin: 0 !important;
  font-size: 32px !important;
  font-weight: bold !important;
  text-transform: uppercase;
  color: var(--text-tertiary) !important;
  line-height: 1 !important;
`;

export const Subtitle = styled(Typography.Title)`
  margin: 0 !important;
  font-weight: 500 !important;
  color: var(--text-tertiary) !important;
  line-height: 1;
`;

export const Info = styled.span`
  font-weight: normal;
  color: var(--text-tertiary);
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
  font-weight: 600;
  color: ${({ color = 'var(--text-secondary)' }: StatContentProps) => `var(--${color})`};
`;
