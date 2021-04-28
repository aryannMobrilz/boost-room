import { FC } from 'react';

import { Col } from 'antd';
import { Title, Info } from './Testimonials.style';

const Testimonials: FC = () => {
  return (
    <Col span={24}>
      <Title>Why Choose Us?</Title>
      <Info>
        Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos
        et accusam et justo duo dolores et ea rebum.
      </Info>
    </Col>
  );
};

export default Testimonials;
