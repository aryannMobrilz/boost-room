import styled from '@emotion/styled';
import { Table as AntTable, Button as AntButton, Typography } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Table = styled(AntTable)`
  .ant-table {
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px var(--border-primary);
    background-color: var(--white);
  }

  th {
    background-color: var(--white) !important;
    padding: 30px 30px 25px 30px !important;
    font-weight: bold !important;
    color: var(--text-tertiary) !important;
  }

  tr:nth-of-type(odd) {
    background-color: var(--table-background);
  }

  td {
    padding: 30px 30px 25px 30px !important;
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
    margin-left: 60px;
  }

  .ant-select-selector {
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px rgba(0, 40, 100, 0.12);
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

export const ConfirmButton = styled(AntButton)`
  font-size: 12px;
  padding: 4px 20px;
  border-radius: 1px;
  background-color: var(--sky-blue);
  border: 0;
  color: var(--white);
  font-weight: bold;
`;

export const DeclineButton = styled(AntButton)`
  font-size: 12px;
  border-radius: 1px;
  padding: 4px 20px;
  border: 1px solid var(--red);
  color: var(--red);
  font-weight: bold;
`;

export const Amount = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: var(--light-green);
`;
