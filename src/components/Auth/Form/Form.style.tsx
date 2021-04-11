import styled from '@emotion/styled';
import { Checkbox, Form, Input } from 'antd';

export const FormItem = styled(Form.Item)`
  .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item-label label {
    font-size: 12px;
    color: var(--form-blue);
  }

  .ant-input-affix-wrapper {
    border-color: var(--form-gray);
    padding-left: 0;
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
  .ant-input-affix-wrapper-focused {
    border-color: var(--form-blue);
    box-shadow: 0 2px 2px -2px var(--form-blue);
  }
`;

export const InputField = styled(Input)`
  padding: 0 3px 3px;
`;

export const PasswordField = styled(Input.Password)`
  padding: 0 3px 3px;
`;

export const CheckboxField = styled(Checkbox)`
  margin-bottom: 40px;

  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: transparent;
  }

  .ant-checkbox-input:hover + .ant-checkbox-inner {
    border-color: var(--form-blue);
  }

  .ant-checkbox-inner {
    border-color: var(--form-dark-gray);
    background-color: var(--form-dark-gray);
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--form-blue);
    border-color: var(--form-blue);
  }

  .ant-checkbox-checked::after {
    border-color: var(--form-blue);
  }
`;
