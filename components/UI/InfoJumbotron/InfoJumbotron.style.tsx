import styled from '@emotion/styled';
import { Row, Button as AntButton, Typography } from 'antd';

import { mediaQuery } from '@/utils/style';

type ContainerProps = {
  src?: string;
};

export const Container = styled(Row)`
  padding: 40px 0;
  background-color: var(--tertiary);
  background-image: ${({ src }: ContainerProps) => (src ? `url(${src})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${mediaQuery.xs`
    background-position: left;
  `}

  ${mediaQuery.sm`
    padding: 50px 0;
  `}

  ${mediaQuery.md`
    padding: 60px 0;
  `}

  ${mediaQuery.lg`
    padding: 80px 0;
  `}

  ${mediaQuery.xl`
    padding: 100px 0;
  `}
`;

export const Title = styled(Typography.Title)`
  max-width: 700px;
  text-transform: uppercase;
  font-size: 30px !important;
  font-weight: 400 !important;
  color: var(--white) !important;
  text-align: center;
  margin: 0 0 5px auto !important;

  ${mediaQuery.xs`
    text-align: center;
  `}

  ${mediaQuery.sm`
    font-size: 35px !important;
  `}

  ${mediaQuery.md`
    font-size: 40px !important;
    text-align: right;
  `}

  ${mediaQuery.lg`
    font-size: 45px !important;
  `}

  ${mediaQuery.xl`
    font-size: 50px !important;
  `}
`;

export const TextBlock = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
`;

export const Subtitle = styled(Typography.Title)`
  max-width: 700px;
  text-transform: uppercase;
  font-size: 30px !important;
  font-weight: 600 !important;
  color: var(--white) !important;
  text-align: center;
  margin: 5px 65px 5px auto !important;

  ${mediaQuery.xs`
    margin: 0 !important;
  `}

  ${mediaQuery.sm`
    font-size: 35px !important;
  `}

  ${mediaQuery.md`
    font-size: 40px !important;
    text-align: right;
  `}

  ${mediaQuery.lg`
    font-size: 45px !important;
  `}

  ${mediaQuery.xl`
    font-size: 50px !important;
  `}
`;

export const Button = styled(AntButton)`
  display: block;
  margin: 25px auto 0 auto;
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
    margin: 30px 90px 0 auto;
    padding: 12px 50px;
    font-size: 16px;
  `}

  ${mediaQuery.lg`
    font-size: 17px;
  `}

  ${mediaQuery.xl`
    font-size: 18px;
    padding: 15px 60px;
  `}
`;
