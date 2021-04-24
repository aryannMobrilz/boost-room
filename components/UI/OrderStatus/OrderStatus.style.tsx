import styled from '@emotion/styled';

import { Typography } from 'antd';

type StatusNameProps = {
  color?: string;
  hasIcon: boolean;
};

export const Container = styled.div`
  display: flex;
`;

export const StatusName = styled(Typography.Text)`
  font-size: 14px;
  margin-left: ${({ hasIcon }: StatusNameProps) => (hasIcon ? 0 : '10px')};
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ color = 'var(--text-secondary)' }: StatusNameProps) => `var(--${color})`};
`;
