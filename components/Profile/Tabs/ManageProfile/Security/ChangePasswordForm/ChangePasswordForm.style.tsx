import styled from '@emotion/styled';
import { Form, Button as AntButton } from 'antd';

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

  .ant-picker {
    width: 100%;
  }
`;

export const Button = styled(AntButton)`
  height: auto;
  padding: 13px 40px;
  border-radius: 3px;
  border: 0;
  background-color: var(--background-quaternary);
  text-transform: uppercase;
  color: var(--white);
`;
