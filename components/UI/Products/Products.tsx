import { FC } from 'react';

import { Row, Col, Input } from 'antd';

import Image from 'next/image';
import { Product } from '@/components/UI';
import { Title, Description } from './Products.style';

export interface ProductsProps {
  isSearchable?: boolean;
  title: string;
  description: string;
  products: Record<string, any>[];
}

const Products: FC<ProductsProps> = ({ isSearchable, title, description, products }) => {
  return (
    <Row>
      <Col span={24}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {isSearchable && (
          <Input
            size="large"
            placeholder="Search For Offer"
            prefix={<Image src="/assets/icons/form/search.svg" width={18} height={18} />}
          />
        )}
        <Row gutter={[25, 25]}>
          {products.map(({ title, description, price, discount }) => (
            <Product
              key={Date.now()}
              title={title}
              description={description}
              price={price}
              discount={discount}
            />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Products;
