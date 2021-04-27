import { FC } from 'react';
import type { Breakpoint } from 'antd/es/_util/responsiveObserve';
import type { Gutter } from 'antd/es/grid/row';

import { Container } from './ProfileContainer.style';

export interface AuthContainerProps {
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | undefined;
  gutter: number | Partial<Record<Breakpoint, number>> | [Gutter, Gutter] | undefined;
}

const ProfileContainer: FC<AuthContainerProps> = ({ children, justify, gutter }) => {
  return (
    <Container justify={justify} gutter={gutter}>
      {children}
    </Container>
  );
};

export default ProfileContainer;
