import { FC } from 'react';
import { range } from '@/utils/helper';

import { Row, Col, Rate } from 'antd';
import { TrustpilotRating } from '@/components/UI';
import {
  Container,
  Title,
  Info,
  Carousel,
  Card,
  NewLine,
  CardTitle,
  CardSubtitle,
  CardText
} from './Testimonials.style';

export type Testimonial = {
  id: number;
  summary: string;
  user: string;
  text: string;
};

export interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Array<Testimonial>;
}

const Testimonials: FC<TestimonialsProps> = ({ title, subtitle, testimonials }) => {
  const parsedTestimonials = range(testimonials, 4);

  return (
    <Col span={24}>
      <Title>{title}</Title>
      <Info>{subtitle}</Info>
      <Carousel autoplay dotPosition="bottom">
        {parsedTestimonials.map((outer) => (
          <div key={Math.random()}>
            <Row gutter={24}>
              {outer.map(({ id, summary, user, text }: Testimonial) => (
                <Col span={6} key={id}>
                  <Card>
                    <CardTitle>{summary}</CardTitle>
                    <CardSubtitle>{user}</CardSubtitle>
                    <Rate allowHalf defaultValue={4} />
                    <NewLine />
                    <CardText
                      ellipsis={{ rows: 8, expandable: true, symbol: <span>see more</span> }}>
                      {text}
                    </CardText>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
      <Container>
        <Col span={24}>
          <TrustpilotRating />
        </Col>
      </Container>
    </Col>
  );
};

export default Testimonials;
