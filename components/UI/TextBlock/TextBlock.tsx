import { FC } from 'react';

import { Col } from 'antd';
import { Container, Title, Paragraph } from './TextBlock.style';

export interface TextBlockProps {
  title?: string;
  last?: boolean;
}

const TextBlock: FC<TextBlockProps> = ({ children, title, last }) => {
  return (
    <Container last={last}>
      <Col span={24}>
        {title && <Title>{title}</Title>}
        <Paragraph>{children}</Paragraph>
      </Col>
    </Container>
  );
};

export default TextBlock;
