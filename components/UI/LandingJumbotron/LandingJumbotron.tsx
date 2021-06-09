import { FC } from 'react';
import { useRouter } from 'next/router';
import type { Url } from 'url';

import { Col } from 'antd';
import { Container, Title, TextBlock, Text, Button } from './LandingJumbotron.style';

export interface JumbotronProps {
  centered?: boolean;
  title: string;
  text: string;
  link?: string;
  url?: string;
  src?: string;
}

const LandingJumbotron: FC<JumbotronProps> = ({ centered, title, text, link, url, src }) => {
  const router = useRouter();

  return (
    <Container src={src}>
      <Col span={24}>
        <TextBlock>
          <Title centered={centered}>{title}</Title>
          <Text centered={centered}>{text}</Text>
          {link && <Button onClick={() => router.push((url as unknown) as Url)}>{link}</Button>}
        </TextBlock>
      </Col>
    </Container>
  );
};

export default LandingJumbotron;
