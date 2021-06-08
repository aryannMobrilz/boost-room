import { FC } from 'react';
import { useRouter } from 'next/router';
import type { Url } from 'url';

import { Col } from 'antd';
import {
  Container,
  Title,
  TextBlock,
  Subtitle,
  Button,
  SubscribeContainer,
  FormItem,
  Input,
  SubscribeButton
} from './InfoJumbotron.style';

export interface JumbotronProps {
  left?: boolean;
  form?: boolean;
  title?: string;
  subtitle: string[];
  link?: string;
  url?: string;
  src?: string;
}

const InfoJumbotron: FC<JumbotronProps> = ({ left, form, title, subtitle, link, url, src }) => {
  const router = useRouter();

  return (
    <Container src={src}>
      <Col span={24}>
        <TextBlock>
          {title && <Title left={left}>{title}</Title>}
          {subtitle.map((sub) => (
            <Subtitle key={Math.random()} left={left}>
              {sub}
            </Subtitle>
          ))}
          {link && <Button onClick={() => router.push((url as unknown) as Url)}>{link}</Button>}
          {form && (
            <SubscribeContainer gutter={15}>
              <Col push={10} span={8}>
                <FormItem
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input placeholder="Type in your e-mail" />
                </FormItem>
              </Col>
              <Col push={10} span={6}>
                <SubscribeButton>Subscribe</SubscribeButton>
              </Col>
            </SubscribeContainer>
          )}
        </TextBlock>
      </Col>
    </Container>
  );
};

export default InfoJumbotron;
