import { FC } from 'react';

import Image from 'next/image';
import { Container, Label } from './Screenshots.style';

export interface ScreenshotsProps {
  data: Record<string, any>[];
}

const Screenshots: FC<ScreenshotsProps> = ({ data }) => {
  return (
    <Container>
      <Image src="/assets/icons/photo-library.svg" width={18} height={18} />
      {data.length == 0 ? (
        <Label>Not yet uploaded</Label>
      ) : (
        <Label decoration>See screenshots</Label>
      )}
    </Container>
  );
};

export default Screenshots;
