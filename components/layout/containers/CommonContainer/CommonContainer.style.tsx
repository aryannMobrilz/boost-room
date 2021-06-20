import styled from '@emotion/styled';
import { Row } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Container = styled(Row)`
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 20px;

  ${mediaQuery.md`
    padding: 50px 40px;
  `}

  ${mediaQuery.xl`
    padding: 60px 50px;
  `}
`;
