import styled from '@emotion/styled';
import { Col } from 'antd';

interface CoverProps {
  src: string;
}

export const Cover = styled(Col)`
  background-size: cover;
  background-image: ${({ src }: CoverProps) => `url(${src})`};
`;
