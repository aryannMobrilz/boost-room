import styled from '@emotion/styled';
import { Row, Button as AntButton, Typography } from 'antd';

import { mediaQuery } from '@/utils/style';

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
  padding: 40px 0;
  background-color: var(--tertiary);
  background-image: ${({ src }: ContainerProps) => (src ? `url(${src})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${mediaQuery.xs`
    background-position: right;
  `}

  ${mediaQuery.sm`
    padding: 45px 0;
  `}

  ${mediaQuery.md`
    padding: 50px 0;
  `}

  ${mediaQuery.lg`
    padding: 55px 0;
  `}

  ${mediaQuery.xl`
    padding: 60px 0;
  `}
`;

export const TextBlock = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;

  ${mediaQuery.md`
    padding: 0 40px;
  `}

  ${mediaQuery.xl`
    padding: 0 50px;
  `}
`;

export const Title = styled(Typography.Title)`
  max-width: 700px;
  text-transform: uppercase;
  font-size: 30px !important;
  font-weight: bold !important;
  color: var(--white) !important;
  margin: ${({ centered }: TitleProps) => (centered ? '0 auto 5px auto' : '0 0 5px 0 !important')};
  text-align: ${({ centered }: TitleProps) => (centered ? 'center' : 'left')};

  ${mediaQuery.sm`
    font-size: 35px !important;
  `}

  ${mediaQuery.md`
    font-size: 40px !important;
  `}

  ${mediaQuery.lg`
    font-size: 45px !important;
  `}

  ${mediaQuery.xl`
    font-size: 50px !important;
  `}
`;

export const Text = styled(Typography.Paragraph)`
  max-width: 700px;
  margin: ${({ centered }: TextProps) => (centered ? '0 auto' : '0')};
  text-align: ${({ centered }: TextProps) => (centered ? 'center' : 'left')};
  font-size: 15px;
  font-weight: 500;
  color: var(--white);

  ${mediaQuery.sm`
    font-size: 16px;
  `}

  ${mediaQuery.md`
    font-size: 17px;
  `}

  ${mediaQuery.lg`
    font-size: 18px;
  `}

  ${mediaQuery.xl`
    font-size: 20px;
  `}
`;

export const Button = styled(AntButton)`
  display: block;
  margin: 30px auto 0 auto;
  text-transform: uppercase;
  background-color: var(--sky-blue);
  border: 0;
  font-size: 14px;
  height: auto;
  color: var(--white);
  padding: 10px 40px;
  border-radius: 3px;

  ${mediaQuery.sm`
    font-size: 15px;
  `}

  ${mediaQuery.md`
    font-size: 16px;
    padding: 12px 50px;
  `}

  ${mediaQuery.lg`
    font-size: 17px;
  `}

  ${mediaQuery.xl`
    font-size: 18px;
    padding: 15px 60px;
  `}
`;
