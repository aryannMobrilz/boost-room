import styled from '@emotion/styled';

import { mediaQuery } from '@/utils/style';

export const Container = styled.div`
  display: flex;
  background-color: var(--white);
  padding: 12px 15px;
  height: 96px;
  border-radius: 5px;
  border-color: var(--border-primary);

  ${mediaQuery.sm`
    padding: 20px 40px;
  `}

  ${mediaQuery.md`
    padding: 20px 40px;
  `}

  ${mediaQuery.lg`
    padding: 20px 40px;
  `}

  ${mediaQuery.xl`
    padding: 20px 40px;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 25px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-tertiary);

  ${mediaQuery.sm`
    font-size: 15px;
  `}

  ${mediaQuery.md`
    font-size: 16px;
  `}

  ${mediaQuery.lg`
    font-size: 17px;
  `}

  ${mediaQuery.xl`
    font-size: 18px;
  `}
`;

export const Title = styled.span`
  display: block;
  font-weight: 600;
`;
