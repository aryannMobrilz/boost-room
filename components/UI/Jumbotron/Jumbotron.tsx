import { FC } from 'react';

import { Col } from 'antd';
import { Container, Title, TextBlock, Text, Button } from './Jumbotron.style';

export interface JumbotronProps {
  centered?: boolean;
  title: string;
  text: string;
  link?: string;
  src?: string;
}

const Jumbotron: FC<JumbotronProps> = ({ centered, title, text, link, src }) => {
  return (
    <Container src={src}>
      <Col span={24}>
        <TextBlock>
          <Title centered={centered}>{title}</Title>
          <Text centered={centered}>{text}</Text>
          {link && <Button>{link}</Button>}
        </TextBlock>
      </Col>
    </Container>
  );
};

export default Jumbotron;
