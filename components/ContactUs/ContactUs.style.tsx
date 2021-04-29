import styled from '@emotion/styled';
import { Row, Form as AntForm, Button, Typography } from 'antd';

export const Form = styled(AntForm)`
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const Title = styled(Typography.Title)`
  font-size: 32px !important;
  color: var(--text-tertiary) !important;
  margin: 0 0 5px 0 !important;
`;

export const Info = styled(Typography.Text)`
  display: block;
  font-size: 18px;
  margin-bottom: 40px;
  font-weight: 500;
  color: var(--text-tertiary);
`;

export const SubmitButton = styled(Button)`
  height: auto;
  margin-top: 15px;
  padding: 10px 59px 10px 60px;
  border-radius: 3px;
  border: none;
  background-color: var(--light-blue);
`;

export const ContactMethods = styled(Row)`
  margin-bottom: 40px;
`;
