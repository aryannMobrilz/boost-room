import { FC } from 'react';

import {
  Container,
  Title,
  Subtitle,
  TextArea,
  ComplaintButton,
  CancelButton
} from './OrderSettings.style';

export interface OrderSettingsProps {
  title: string[];
  subtitle: string[];
}

const OrderSettings: FC<OrderSettingsProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title[0]}</Title>
      <Subtitle>{subtitle[0]}</Subtitle>
      <TextArea
        autoSize={{ minRows: 6, maxRows: 12 }}
        // onChange={onChange}
      />
      <ComplaintButton type="primary">Send Complaint</ComplaintButton>
      <br />
      <br />
      <Title>{title[1]}</Title>
      <Subtitle>{subtitle[1]}</Subtitle>
      <TextArea
        allowClear
        autoSize={{ minRows: 6, maxRows: 12 }}
        // onChange={onChange}
      />
      <CancelButton danger>Cancel / Refund</CancelButton>
    </Container>
  );
};

export default OrderSettings;
