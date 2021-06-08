import styled from '@emotion/styled';

import { Row, Form, Input as AntInput, Button as AntButton, Typography } from 'antd';

type ContainerProps = {
  src?: string;
};

type TitleProps = {
  left?: boolean;
};

type TextProps = {
  left?: boolean;
};

export const Container = styled(Row)`
  padding: 100px 0;
  background: ${({ src }: ContainerProps) => (src ? `url(${src})` : 'var(--tertiary)')};
`;

export const Title = styled(Typography.Title)`
  max-width: 700px;
  text-transform: uppercase;
  font-size: 48px !important;
  font-weight: 400 !important;
  color: var(--white) !important;
  text-align: ${({ left }: TitleProps) => (left ? 'left' : 'right')};
  margin: ${({ left }: TitleProps) => (left ? '0 0 0 auto !important' : '0 0 5px auto !important')};
`;

export const TextBlock = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Subtitle = styled(Typography.Title)`
  max-width: 700px;
  text-transform: uppercase;
  font-size: 48px !important;
  font-weight: 600 !important;
  color: var(--white) !important;
  text-align: ${({ left }: TextProps) => (left ? 'left' : 'right')};
  margin: ${({ left }: TextProps) =>
    left ? '5px 0 0 auto !important' : '5px 65px 5px auto !important'};
`;

export const Button = styled(AntButton)`
  display: block;
  margin: 30px 90px 0 auto;
  text-transform: uppercase;
  background-color: var(--sky-blue);
  border: 0;
  font-size: 18px;
  height: auto;
  color: var(--white);
  padding: 15px 60px;
  border-radius: 3px;
`;

export const SubscribeContainer = styled(Row)``;

export const FormItem = styled(Form.Item)``;

export const Input = styled(AntInput)``;

export const SubscribeButton = styled(AntButton)`
  display: block;
  margin: 0 90px 0 auto;
  text-transform: uppercase;
  background-color: var(--sky-blue);
  border: 0;
  font-size: 18px;
  height: auto;
  color: var(--white);
  padding: 15px 60px;
  border-radius: 3px;
`;
