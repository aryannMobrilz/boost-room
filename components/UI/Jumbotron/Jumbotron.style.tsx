import styled from '@emotion/styled';

import { Row, Typography } from 'antd';

type ContainerProps = {
  src: string;
};

type TitleProps = {
  centered?: boolean;
};

type TextProps = {
  centered?: boolean;
};

export const Container = styled(Row)`
  padding: 60px 0;
  background: ${({ src }: ContainerProps) => `url(${src})`};
`;

export const Title = styled(Typography.Title)`
  text-transform: uppercase;
  font-size: 50px !important;
  margin-bottom: 5px !important;
  font-weight: bold !important;
  color: var(--white) !important;
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
