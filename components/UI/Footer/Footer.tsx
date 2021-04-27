import { FC } from 'react';
import moment from 'moment';

import { LayoutFooter, Row, Col, NewLine, Copyright, Rights } from './Footer.style';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';
import ThirdColumn from './ThirdColumn';
import FourthColumn from './FourthColumn';

const Footer: FC = () => {
  return (
    <LayoutFooter>
      <Row gutter={{ xs: 8, sm: 16, md: 80, lg: 80 }}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 8 }}>
          <FirstColumn />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
          <SecondColumn />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 5, push: 1 }}>
          <ThirdColumn />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 4, push: 1 }}>
          <FourthColumn />
        </Col>
      </Row>
      <NewLine />
      <Row gutter={{ xs: 8, sm: 16, md: 80, lg: 80 }}>
        <Col span={24}>
          <Copyright>&copy; {moment().year()} Boostroom. All rights reserved.</Copyright>
          <Rights>
            All games mentioned on this website as well as all related terms, logos, and images are
            trademarks or registered trademarks
            <br />
            of their respective publishers and owners. This site is in no way
            <br />
            associated with or endorsed by any of the game publishers.
          </Rights>
        </Col>
      </Row>
    </LayoutFooter>
  );
};

export default Footer;
