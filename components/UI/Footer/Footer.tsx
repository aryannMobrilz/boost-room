import { FC } from 'react';
import { Row, Col } from 'antd';

import { LayoutFooter } from './Footer.style';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';
import ThirdColumn from './ThirdColumn';
import FourthColumn from './FourthColumn';

const Footer: FC = () => {
  return (
    <LayoutFooter>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          <FirstColumn />
        </Col>
        <Col span={6}>
          <SecondColumn />
        </Col>
        <Col span={6}>
          <ThirdColumn />
        </Col>
        <Col span={6}>
          <FourthColumn />
        </Col>
      </Row>
    </LayoutFooter>
  );
};

export default Footer;
