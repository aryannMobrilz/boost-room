import styled from '@emotion/styled';
import { Row, Col, Typography, Button } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Container = styled(Row)`
  max-width: 680px;
  margin: 0 auto;
`;

export const TextBlock = styled(Col)`
  display: flex;
  align-items: flex-start;
`;

export const Text = styled(Typography.Text)`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-tertiary);
`;

export const Reviews = styled(Typography.Text)`
  font-weight: bold;
  color: var(--trustpilot-primary);
`;

export const More = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  ${mediaQuery.md`
    justify-content: flex-end;
    margin:0;
  `}
`;

export const ReviewsButton = styled(Button)`
  font-size: 18px;
  text-transform: uppercase;
  height: auto;
  padding: 15px 60px;
  font-weight: bold;
  background-color: var(--light-blue);
  color: var(--white);
`;
