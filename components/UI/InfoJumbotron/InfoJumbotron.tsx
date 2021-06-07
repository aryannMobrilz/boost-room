import { FC } from 'react';
import { useRouter } from 'next/router';
import type { Url } from 'url';

import { Col } from 'antd';
import { Container, Title, TextBlock, Subtitle, Button } from './InfoJumbotron.style';

export interface JumbotronProps {
  centered?: boolean;
  title: string;
  subtitle: string;
  link?: string;
  url?: string;
  src?: string;
}

const InfoJumbotron: FC<JumbotronProps> = ({ centered, title, subtitle, link, url, src }) => {
  const router = useRouter();

  return (
    <Container src={src}>
      <Col span={24}>
        <TextBlock>
          <Title centered={centered}>{title}</Title>
          <Subtitle centered={centered}>{subtitle}</Subtitle>
          {link && <Button onClick={() => router.push((url as unknown) as Url)}>{link}</Button>}
        </TextBlock>
      </Col>
    </Container>
  );
};

export default InfoJumbotron;
