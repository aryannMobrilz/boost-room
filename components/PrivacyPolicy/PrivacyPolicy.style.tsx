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
