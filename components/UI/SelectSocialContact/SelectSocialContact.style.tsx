import styled from '@emotion/styled';
import { Col, Form, Button } from 'antd';

export const FormItem = styled(Form.Item)`
  .ant-form-item-label {
    padding-bottom: 15px;
  }

  label {
    font-weight: 600;
    color: var(--text-tertiary);
  }

  input {
    padding: 15px 16px;
    font-weight: 500;
    color: var(--text-tertiary);
  }

  .ant-select {
    width: 100% !important;
    font-weight: 500;
    color: var(--text-tertiary);
  }

  .ant-select-selector {
    height: 54px !important;
    padding: 15px 16px !important;
  }

  .ant-select-selection-search {
    display: flex !important;
    align-items: center;
  }

  .ant-select-selector input {
    margin-left: 16px;
  }
`;

export const ArrowRight = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const AddButton = styled(Button)`
  margin-top: 6px;
  display: flex;
  padding: 0;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--border-secondary);
  border: 0;
  box-shadow: none;

  span {
    padding-left: 11px;
  }
`;

export const CloseButton = styled(Button)`
  display: flex;
  height: 54px;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
  color: var(--border-secondary);
  border: 0;
  box-shadow: none;

  span {
    padding-left: 11px;
  }
`;
