import { FC } from 'react';

import { Col } from 'antd';
import { Container, Title, TextBlock, Text } from './Jumbotron.style';

export interface JumbotronProps {
  centered?: boolean;
  title: string;
  text: string;
  src: string;
}

const Jumbotron: FC<JumbotronProps> = ({ centered, title, text, src }) => {
  return (
    <Container src={src}>
      <Col span={24}>
        <TextBlock>
          <Title centered={centered}>{title}</Title>
          <Text centered={centered}>{text}</Text>
        </TextBlock>
      </Col>
    </Container>
  );
};

export default Jumbotron;
