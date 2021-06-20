import { FC } from 'react';

import Image from 'next/image';
import { Row, Col } from 'antd';
import { Container, TextBlock, Reviews, Text, More, ReviewsButton } from './TrustpilotRating.stlye';

const TrustpilotRating: FC = () => {
  return (
    <Container>
      <Col xs={24} md={12}>
        <Row gutter={[0, 12]}>
          <Col xs={{ span: 14, push: 9 }} md={{ span: 24, push: 0 }}>
            <Image src="/assets/icons/trustpilot-stars.svg" width={140} height={25} />
          </Col>
          <TextBlock xs={{ span: 12, push: 6 }} md={{ span: 24, push: 0 }}>
            <Text>
              Check out our <Reviews>3131 reviews</Reviews> on
            </Text>
            <Image src="/assets/icons/trustpilot-logo.svg" height={23} width={92} />
          </TextBlock>
        </Row>
      </Col>
      <More xs={24} md={12}>
        <ReviewsButton type="primary">Read more reviews</ReviewsButton>
      </More>
    </Container>
  );
};

export default TrustpilotRating;
