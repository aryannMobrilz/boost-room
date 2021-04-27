import styled from '@emotion/styled';
import { Col, Form, Switch as AntSwitch, Typography } from 'antd';

export const Container = styled(Col)`
  display: flex;
  align-items: center;
  height: auto;
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 0;
`;

export const Switch = styled(AntSwitch)`
  &.ant-switch {
    background-color: var(--background-tertiary);
  }

  &.ant-switch-checked {
    background-color: var(--sky-blue) !important;
  }
`;

export const Label = styled(Typography.Text)`
  display: block;
  margin-left: 20px;
  font-size: 16px;
  color: var(--background-quaternary);
`;
