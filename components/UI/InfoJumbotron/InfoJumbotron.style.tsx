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
  padding: 100px 0;
  background: ${({ src }: ContainerProps) => (src ? `url(${src})` : 'var(--tertiary)')};
`;

export const Title = styled(Typography.Title)`
  max-width: 700px;
  text-transform: uppercase;
  font-size: 48px !important;
  font-weight: 400 !important;
  color: var(--white) !important;
  margin: ${({ centered }: TextProps) =>
    centered ? '0 auto 5px auto !important' : '0 0 5px auto !important'};
  text-align: ${({ centered }: TitleProps) => (centered ? 'center' : 'right')};
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
  margin: ${({ centered }: TextProps) =>
    centered ? '0 auto 5px auto !important' : '0 70px 5px auto !important'};
  text-align: ${({ centered }: TitleProps) => (centered ? 'center' : 'right')};
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
