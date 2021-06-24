import styled from '@emotion/styled';
import { Typography } from 'antd';

import { mediaQuery } from '@/utils/style';

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

export const Signature = styled(Typography.Text)`
  display: block;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-tertiary);

  ${mediaQuery.sm`
    font-size: 22px !important;
  `}

  ${mediaQuery.md`
    font-size: 24px !important;
  `}

  ${mediaQuery.lg`
    font-size: 26px !important;
  `}

  ${mediaQuery.xl`
    font-size: 28px;
  `}
`;
