import { FC } from 'react';

import Image from 'next/image';
import { Row, Col } from 'antd';
import { Container, TextBlock, Reviews, Text, More, ReviewsButton } from './TrustpilotRating.stlye';

const TrustpilotRating: FC = () => {
  return (
    <Container>
      <Col span={12}>
        <Row gutter={[0, 12]}>
          <Col span={24}>
            <Image src="/assets/icons/trustpilot-stars.svg" width={140} height={25} />
          </Col>
          <TextBlock span={24}>
            <Text>
              Check out our <Reviews>3131 reviews</Reviews> on
            </Text>
            <Image src="/assets/icons/trustpilot-logo.svg" height={23} width={92} />
          </TextBlock>
        </Row>
      </Col>
      <More span={12}>
        <ReviewsButton type="primary">Read more reviews</ReviewsButton>
      </More>
    </Container>
  );
};

export default TrustpilotRating;
