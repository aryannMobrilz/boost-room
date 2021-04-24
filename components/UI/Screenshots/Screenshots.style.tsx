import styled from '@emotion/styled';
import { Typography } from 'antd';

type LabelProps = {
  decoration?: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled(Typography.Text)`
  margin-left: 4px;
  text-decoration: underline;
  text-decoration: ${({ decoration }: LabelProps) => (decoration ? 'underline' : 'none')};
`;
