import styled from '@emotion/styled';
import { Table as AntTable, Button as AntButton, Typography } from 'antd';

type InfoProps = {
  color?: string;
};

type OptionButtonProps = {
  active: boolean;
};

type ButtonProps = {
  margin?: string;
  color?: string;
};

export const Table = styled(AntTable)`
  .ant-table {
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px var(--border-primary);
    background-color: var(--white);
  }

  th {
    background-color: var(--white) !important;
    padding: 20px !important;
    font-weight: bold !important;
    color: var(--text-tertiary) !important;
    border-bottom-color: var(--border-primary);
  }

  td {
    background-color: var(--white) !important;
    border-bottom-color: var(--border-primary) !important;
    padding: 30px 30px 25px 30px !important;
  }

  td:nth-of-type(1) {
    vertical-align: top;
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

export const OrderKey = styled(Typography.Text)`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
`;

export const Info = styled(Typography.Text)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ color = 'text-secondary' }: InfoProps) => `var(--${color})`};
`;

export const OptionButton = styled(AntButton)`
  min-width: 130px;
  margin: 15px 0 15px 0;
  background-color: var(--background-primary);
  color: ${({ active }: OptionButtonProps) =>
    active ? 'var(--sky-blue)' : 'var(--border-tertiary)'};
  border-color: ${({ active }: OptionButtonProps) =>
    active ? 'var(--sky-blue)' : 'var(--border-primary)'};
  border-radius: 4px 0 0 4px;
  border-width: 1px 0.5px 1px 1px;
  font-weight: 600;
  text-shadow: none;
  box-shadow: none;

  &:nth-of-type(2) {
    border-radius: 0 4px 4px 0;
    border-width: 1px 1px 1px 0.5px;
  }

  &:hover,
  &:focus {
    color: var(--sky-blue);
    background-color: var(--background-primary) !important;
    border-color: var(--sky-blue) !important;
  }
`;

export const CloseButton = styled(AntButton)`
  background-color: transparent;
  border: 0;
  box-shadow: none;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 15px;
  color: var(--sky-blue);
  text-shadow: none;

  &:hover,
  &:focus {
    color: var(--sky-blue);
    background-color: transparent !important;
    box-shadow: none;
    border-color: transparent !important;
  }
`;

export const Button = styled(AntButton)`
  min-width: 130px;
  margin: ${({ margin = '15px 0 20px 0' }: ButtonProps) => margin};
  color: ${({ color }: ButtonProps) => (color ? 'var(--white)' : 'var(--text-tertiary)')};
  font-weight: 600;
  border: solid 1px var(--border-primary);
  border-radius: 4px;
  background-color: ${({ color = 'background-primary' }: ButtonProps) => `var(--${color})`}; ;
`;

export const OrderInfo = styled.div`
  display: flex;
  margin-left: auto;
`;
