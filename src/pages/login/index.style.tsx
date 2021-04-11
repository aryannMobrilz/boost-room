import styled from '@emotion/styled';
import { Row, Col } from 'antd';

import loginCover from '@/assets/images/login-cover.png';

export const Container = styled(Row)`
  height: 100%;
  padding: 60px 0;
`;

export const CoverImage = styled(Col)`
  background-image: url('${loginCover}');
  background-size: cover;
`;
