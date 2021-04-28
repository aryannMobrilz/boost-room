import styled from '@emotion/styled';
import { Row, Button, Typography } from 'antd';

export const Container = styled(Row)`
  padding: 50px 0;
`;

export const Title = styled(Typography.Title)`
  text-align: center;
  font-size: 40px !important;
  font-weight: bold !important;
  margin-bottom: 10px !important;
  color: var(--text-tertiary) !important;
`;

export const Info = styled(Typography.Text)`
  display: block;
  width: 600px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: var(--text-tertiary);
`;

export const Game = styled.span`
  display: block;
  text-align: center;
  padding: 40px 11px;
  color: var(--white);
  background-color: var(--background-quaternary);
`;

export const AllGamesButton = styled(Button)`
  display: block;
  margin: 30px auto 100px auto;
  text-transform: uppercase;
  background-color: var(--sky-blue);
  border: 0;
  font-size: 18px;
  height: auto;
  color: var(--white);
  padding: 15px 60px;
  border-radius: 3px;
`;
