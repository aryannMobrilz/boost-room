import styled from '@emotion/styled';
import { Table as AntTable, Button as AntButton, Typography } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Table = styled(AntTable)`
  th {
    background-color: var(--white) !important;
  }

  tr:nth-child(odd) {
    background-color: var(--table-background);
  }

  .ant-table-pagination > li {
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-tertiary);
  }

  .ant-pagination-item-active {
    background-color: var(--form-blue) !important;
  }

  .ant-pagination-item-active a {
    color: var(--white);
  }

  .ant-pagination-prev button {
    background-color: transparent;
    border: none;
  }

  .ant-pagination-prev button svg {
    fill: var(--form-blue);
  }

  .ant-pagination-next button {
    background-color: transparent;
    border: none;
  }

  .ant-pagination-next button svg {
    fill: var(--form-blue);
  }

  .ant-pagination-disabled button svg {
    fill: var(--text-secondary);
  }

  .ant-pagination-options {
    //margin-right: auto;
  }
`;

export const Date = styled(Typography.Text)`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-tertiary);
`;

export const Time = styled(Typography.Text)`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-quaternary);
`;

export const Order = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
`;

export const OrderNum = styled.span`
  color: var(--text-tertiary);
`;

export const ViewOrder = styled(Typography.Link)`
  color: var(--text-tertiary) !important;
  text-decoration: underline !important;
`;

export const RefundInfo = styled.span`
  font-size: 12px;
  padding-top: 10px;
  font-weight: 600;
  color: var(--text-secondary);
`;

export const Button = styled(AntButton)`
  font-size: 12px;
`;

export const Amount = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: var(--light-green);
}`;
