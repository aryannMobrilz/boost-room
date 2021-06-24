import styled from '@emotion/styled';
import { Row } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Container = styled(Row)`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 30px 40px 30px;

  ${mediaQuery.md`
    padding: 40px 40px 50px 40px;
  `}

  ${mediaQuery.xl`
    padding: 50px 50px 60px 50px;
  `}
`;
