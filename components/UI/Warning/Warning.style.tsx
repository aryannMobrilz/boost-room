import styled from '@emotion/styled';
import { Typography } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px;
  border-radius: 3px;
  margin-bottom: 30px;
  background-color: var(--background-quaternary);

  ${mediaQuery.sm`
    padding: 10px;
  `}

  ${mediaQuery.md`
    padding: 12px;
  `}

  ${mediaQuery.lg`
    padding: 14px;
  `}

  ${mediaQuery.xl`
    padding: 15px;
  `}
`;

export const Text = styled(Typography.Paragraph)`
  margin: 0 0 0 6px !important;
  flex: 1;
  font-size: 10px;
  font-weight: 500;
  color: var(--white);

  ${mediaQuery.sm`
    margin: 0 0 0 7px !important;
    font-size: 11px !important;
  `}

  ${mediaQuery.md`
    margin: 0 0 0 9px !important;
    font-size: 12px !important;
  `}

  ${mediaQuery.lg`
    margin: 0 0 0 11px !important;
    font-size: 13px !important;
  `}

  ${mediaQuery.xl`
    margin: 0 0 0 12px !important;
    font-size: 14px !important;
  `}
`;
