import styled from '@emotion/styled';
import { Row, Typography } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Container = styled(Row)`
  padding: 30px 0 50px 0;

  ${mediaQuery.sm`
    padding: 34px 0 70px 0;
  `}

  ${mediaQuery.md`
    padding: 40px 0;
    padding: 40px 0 90px 0;
  `}

  ${mediaQuery.lg`
    padding: 45px 0 130px 0;
  `}

  ${mediaQuery.xl`
    padding: 50px 0 160px 0;
  `}
`;

export const Title = styled(Typography.Title)`
  font-size: 30px !important;
  font-weight: bold !important;
  color: var(--text-tertiary) !important;
  margin: 0 0 5px 0 !important;

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
  font-size: 14px;
  font-weight: 500;
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

export const Service = styled.div`
  display: block;
  padding: 20px;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 600;
  background-color: var(--background-quaternary);
  margin-bottom: 20px;

  ${mediaQuery.sm`
    padding: 22px;
    margin-bottom: 10px;
  `}

  ${mediaQuery.md`
    margin-bottom: 20px;
    padding: 24px;
  `}

  ${mediaQuery.lg`
    padding: 28px;
  `}

  ${mediaQuery.xl`
    margin-bottom: 25px;
    padding: 30px;
  `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;

  ${mediaQuery.sm`
    padding-bottom: 32px;
  `}

  ${mediaQuery.md`
    padding-bottom: 35px;
  `}

  ${mediaQuery.lg`
    padding-bottom: 38px;
  `}

  ${mediaQuery.xl`
    padding-bottom: 40px;
  `}
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: #f64538;
`;

export const Heading = styled.span`
  font-size: 20px;
  padding-left: 20px;
  font-weight: 600;
  color: var(--white);
`;

export const Game = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: var(--white);
  text-decoration: underline;
  padding-bottom: 20px;

  ${mediaQuery.sm`
    padding-bottom: 22px;
  `}

  ${mediaQuery.md`
    padding-bottom: 25px;
  `}

  ${mediaQuery.lg`
    padding-bottom: 28px;
  `}

  ${mediaQuery.xl`
    padding-bottom: 30px;
  `}
`;

export const More = styled(Typography.Link)`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  margin-right: 10px;
  color: var(--sky-blue);
`;
