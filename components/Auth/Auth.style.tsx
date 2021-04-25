import styled from '@emotion/styled';
import { Button, Checkbox, Col, Form, Input, Typography } from 'antd';

type FormItemProps = {
  lastChild?: boolean;
};

export const Container = styled(Col)`
  padding: 45px 65px;
  background-color: var(--white);
`;

export const RegisterButton = styled(Button)`
  height: auto;
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  font-weight: bold;
  padding: 13px 0 !important;
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: ${({ lastChild = false }: FormItemProps) => (lastChild ? '15px' : '50px')};

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

export const InputCheckbox = styled(Checkbox)`
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

export const InputPassword = styled(Input.Password)`
  padding: 0 3px 3px;
`;

export const InputText = styled(Input)`
  padding: 0 3px 3px;
`;

export const RememberMe = styled(Form.Item)`
  margin-bottom: 40px;

  .ant-checkbox-wrapper {
    margin-bottom: 0;
  }

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ForgotPassword = styled(Typography.Link)`
  display: inline-block;
  color: var(--sky-blue) !important;
  font-size: 12px;
  font-weight: bold;
`;
