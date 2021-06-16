import { Typography } from 'antd';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-quaternary);
  padding: 25px;
`;

export const Title = styled(Typography.Title)`
  font-size: 22px !important;
  color: var(--white) !important;
  margin-bottom: 8px !important;
`;

export const Description = styled(Typography.Paragraph)`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-quaternary);
  margin: 0 !important;
  padding-bottom: 30px;
`;

export const PriceLabel = styled(Typography.Text)`
  font-size: 16px;
  color: var(--white);
  text-transform: uppercase;
  padding-bottom: 8px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Price = styled(Typography.Text)`
  font-size: 22px;
  line-height: 1;
  font-weight: bold;
  color: var(--light-green);
`;

export const DiscountPrice = styled(Typography.Text)`
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  color: rgba(245, 245, 245, 0.6);
  padding-left: 15px;
  text-decoration: line-through;
`;

export const Discount = styled(Typography.Text)`
  padding: 3px 6px;
  border-radius: 2px;
  background-color: var(--light-blue);
  color: var(--white);
  font-size: 12px;
  font-weight: bold;
  margin-left: 15px;
`;
