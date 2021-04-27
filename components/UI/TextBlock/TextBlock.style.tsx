import styled from '@emotion/styled';
import { Row, Typography } from 'antd';

type ContainerProps = {
  last?: boolean;
};

export const Container = styled(Row)`
  margin-bottom: ${({ last }: ContainerProps) => (last ? '0' : '40px')};
`;

export const Title = styled(Typography.Title)`
  font-size: 22px !important;
  font-weight: 600 !important;
  color: var(--text-tertiary) !important;
  margin: 0 0 15px 0 !important;
`;

export const Paragraph = styled(Typography.Paragraph)`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0 !important;
  color: var(--text-tertiary);
`;
