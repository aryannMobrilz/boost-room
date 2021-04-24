import { FC } from 'react';

import { Typography } from 'antd';
import { Container, Detail, Name, Value, NewLine } from './PurchasePreview.style';

export interface PurchasePreviewProps {
  details: Record<string, any>[];
  onChange: (settings: Record<string, any>) => void;
}

const PurchasePreview: FC<PurchasePreviewProps> = ({ details, onChange }) => {
  return (
    <Container>
      {details.map((detail: Record<string, any>) => (
        <>
          <Typography.Title level={5}>1. Product</Typography.Title>
          <Detail>
            <Name>Order ID:</Name>
            <Value>#7213321</Value>
          </Detail>
          <NewLine />
          <Detail>
            <Name>Order ID:</Name>
            <Value>#7213321</Value>
          </Detail>
          <NewLine />
        </>
      ))}
    </Container>
  );
};

export default PurchasePreview;
