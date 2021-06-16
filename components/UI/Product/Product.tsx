import { FC } from 'react';

import { Col } from 'antd';
import {
  Container,
  Title,
  Description,
  PriceLabel,
  PriceContainer,
  Price,
  DiscountPrice,
  Discount
} from './Product.style';

export interface ProductProps {
  title: string;
  description: string;
  currency?: string;
  price: number;
  discount: number;
}

const Product: FC<ProductProps> = ({ title, description, currency = '$', price, discount }) => {
  return (
    <Col span={8}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PriceLabel>Starting at</PriceLabel>
        <PriceContainer>
          <Price>
            {currency}
            {price}
          </Price>
          <DiscountPrice>{discount}</DiscountPrice>
          <Discount>-14%</Discount>
        </PriceContainer>
      </Container>
    </Col>
  );
};

export default Product;
