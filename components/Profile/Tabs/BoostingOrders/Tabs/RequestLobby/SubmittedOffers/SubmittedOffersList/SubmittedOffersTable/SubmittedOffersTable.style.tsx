import styled from '@emotion/styled';
import { Table as AntTable, Button as AntButton, Typography } from 'antd';

type InfoProps = {
  color?: string;
};

type ButtonProps = {
  margin?: string;
  color?: string;
};

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

export const OrderKey = styled(Typography.Text)`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`;

export const Info = styled(Typography.Text)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ color = 'var(--text-secondary)' }: InfoProps) => `var(--${color})`};
`;

export const Button = styled(AntButton)`
  display: block;
  min-width: 130px;
  margin: ${({ margin = '15px 0 20px 0' }: ButtonProps) => margin};
  color: ${({ color }: ButtonProps) => (color ? 'var(--white)' : 'var(--text-tertiary)')};
  font-weight: 600;
  border: solid 1px var(--border-primary);
  background-color: ${({ color = 'var(--background-primary)' }: ButtonProps) =>
    `var(--${color})`}; ;
`;
