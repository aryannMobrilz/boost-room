import { useMemo, useState, FC } from 'react';
import { range } from '@/utils/helper';
import { useDeviceDetect } from '@/hooks';

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
  const device = useDeviceDetect();
  const [chunkSize, setChunkSize] = useState<number>(4);

  console.log('device', device?.type);

  useMemo(() => {
    if (device?.type == 'xs') {
      setChunkSize(1);
    } else if (device?.type == 'sm') {
      setChunkSize(2);
    } else if (device?.type == 'md' || device?.type == 'lg') {
      setChunkSize(3);
    } else {
      setChunkSize(4);
    }
  }, [device?.type]);

  const parsedTestimonials = range(testimonials, chunkSize);

  return (
    <Col span={24}>
      <Title>{title}</Title>
      <Info>{subtitle}</Info>
      <Carousel autoplay dotPosition="bottom">
        {parsedTestimonials.map((outer) => (
          <div key={Math.random()}>
            <Row gutter={24}>
              {outer.map(({ id, summary, user, text }: Testimonial) => (
                <Col key={id} xs={24} sm={12} md={8} xl={6}>
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
