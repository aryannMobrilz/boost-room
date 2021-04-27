import { FC } from 'react';

import { Cover } from './CoverImage.style';

export interface CoverImageProps {
  src: string;
  xl: number;
  lg: number;
  xs: number;
}

const CoverImage: FC<CoverImageProps> = ({ src, xl, lg, xs }) => {
  return <Cover src={src} xl={xl} lg={lg} xs={xs} />;
};

export default CoverImage;
