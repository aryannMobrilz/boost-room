import styled from '@emotion/styled';
import { Row, Button, Typography } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Container = styled(Row)`
  padding: 50px 0;
`;

export const Title = styled(Typography.Title)`
  text-align: center;
  font-size: 30px !important;
  font-weight: bold !important;
  margin-bottom: 10px !important;
  color: var(--text-tertiary) !important;

  ${mediaQuery.sm`
    font-size: 34px !important;
  `}

  ${mediaQuery.md`
    font-size: 36px !important;
  `}

  ${mediaQuery.lg`
    font-size: 38px !important;
  `}

  ${mediaQuery.xl`
    font-size: 40px !important;
  `}
`;

export const Info = styled(Typography.Text)`
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: var(--text-tertiary);

  ${mediaQuery.sm`
    font-size: 15px;
  `}

  ${mediaQuery.md`
    width: 600px;
    font-size: 16px;
  `}

  ${mediaQuery.lg`
    font-size: 17px;
  `}

  ${mediaQuery.xl`
    font-size: 18px;
  `}
`;

export const Game = styled.span`
  display: block;
  text-align: center;
  padding: 11px 40px;
  border-radius: 5px;
  color: var(--white);
  background-color: var(--background-quaternary);
  margin-bottom: 20px;

  ${mediaQuery.md`
    margin-bottom: 30px;
  `}

  ${mediaQuery.lg`
    margin-bottom: 40px;
  `}
`;

export const AllGamesButton = styled(Button)`
  display: block;
  margin: 30px auto 100px auto;
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
