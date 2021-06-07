import styled from '@emotion/styled';

import { Row, Button as AntButton, Typography } from 'antd';

type ContainerProps = {
  src?: string;
};

type TitleProps = {
  centered?: boolean;
};

type TextProps = {
  centered?: boolean;
};

export const Container = styled(Row)`
  padding: 60px 0;
  background: ${({ src }: ContainerProps) => (src ? `url(${src})` : 'var(--tertiary)')};
`;

export const Title = styled(Typography.Title)`
  max-width: 700px;
  text-transform: uppercase;
  font-size: 50px !important;
  font-weight: bold !important;
  color: var(--white) !important;
  margin: ${({ centered }: TitleProps) => (centered ? '0 auto 5px auto' : '0 0 5px 0 !important')};
  text-align: ${({ centered }: TitleProps) => (centered ? 'center' : 'left')};
`;

export const TextBlock = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Text = styled(Typography.Paragraph)`
  max-width: 700px;
  margin: ${({ centered }: TextProps) => (centered ? '0 auto' : '0')};
  text-align: ${({ centered }: TextProps) => (centered ? 'center' : 'left')};
  font-size: 20px;
  font-weight: 500;
  color: var(--white);
`;

export const Button = styled(AntButton)`
  display: block;
  margin: 30px auto 0 auto;
  text-transform: uppercase;
  background-color: var(--sky-blue);
  border: 0;
  font-size: 18px;
  height: auto;
  color: var(--white);
  padding: 15px 60px;
  border-radius: 3px;
`;
