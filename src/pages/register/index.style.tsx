import styled from '@emotion/styled';
import { Row, Col } from 'antd';

import registerCover from '@/assets/images/register-cover.png';

export const Container = styled(Row)`
  height: 100%;
  padding: 30px 0;
`;

export const CoverImage = styled(Col)`
  background-image: url('${registerCover}');
  background-size: cover;
`;
