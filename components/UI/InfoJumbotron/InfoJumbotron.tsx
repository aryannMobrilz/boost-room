import { FC } from 'react';
import { useRouter } from 'next/router';
import type { Url } from 'url';

import { Col } from 'antd';
import { Container, TextBlock, Title, Subtitle, Button } from './InfoJumbotron.style';

export interface JumbotronProps {
  titles?: string[];
  subtitles?: string[];
  link?: string;
  url?: string;
  src?: string;
}

const InfoJumbotron: FC<JumbotronProps> = ({ titles, subtitles, link, url, src }) => {
  const router = useRouter();

  return (
    <Container src={src}>
      <Col span={24}>
        <TextBlock>
          {titles?.map((title) => (
            <Title key={Math.random()}>{title}</Title>
          ))}
          {subtitles?.map((subtitle) => (
            <Subtitle key={Math.random()}>{subtitle}</Subtitle>
          ))}
          {link && <Button onClick={() => router.push((url as unknown) as Url)}>{link}</Button>}
        </TextBlock>
      </Col>
    </Container>
  );
};

export default InfoJumbotron;
