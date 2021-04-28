import styled from '@emotion/styled';
import { Form } from 'antd';

export const FormItem = styled(Form.Item)`
  .ant-form-item-label {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-tertiary);
    padding-bottom: 15px;
  }

  input {
    border-radius: 3px;
    border-color: var(--border-primary);
    padding: 12px 15px;
  }
`;
