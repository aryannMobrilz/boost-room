import styled from '@emotion/styled';
import { Row, Typography } from 'antd';

export const Container = styled(Row)`
  padding: 50px 0;
`;

export const Title = styled(Typography.Title)`
  font-size: 40px !important;
  font-weight: bold !important;
  color: var(--text-tertiary) !important;
  margin: 0 0 5px 0 !important;
`;

export const Info = styled(Typography.Text)`
  display: block;
  width: 600px;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-tertiary);
`;

export const Service = styled.div`
  display: block;
  padding: 30px;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 600;
  color: var(--white);
  background-color: var(--background-quaternary);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: #f64538;
`;

export const Heading = styled.span`
  font-size: 20px;
  padding-left: 20px;
  font-weight: 600;
  color: var(--white);
`;

export const Game = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: var(--white);
  text-decoration: underline;
  padding-bottom: 30px;
`;

export const More = styled(Typography.Link)`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  margin-right: 10px;
`;
