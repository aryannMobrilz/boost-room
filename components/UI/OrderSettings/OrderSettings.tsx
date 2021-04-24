import { FC } from 'react';

import { Input, Typography } from 'antd';
import { Container, Subtitle, ComplaintButton, CancelButton } from './OrderSettings.style';

export interface OrderSettingsProps {
  onChange: (settings: Record<string, any>) => void;
}

const OrderSettings: FC<OrderSettingsProps> = ({ onChange }) => {
  return (
    <Container>
      <Typography.Title level={5}>Complaint message</Typography.Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Subtitle>
      <Input.TextArea
        allowClear
        autoSize={{ minRows: 6, maxRows: 12 }}
        // onChange={onChange}
      />
      <ComplaintButton>Send Complaint</ComplaintButton>
      <br />
      <br />
      <Typography.Title level={5}>Cancel & Refund request</Typography.Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Subtitle>
      <Input.TextArea
        allowClear
        autoSize={{ minRows: 6, maxRows: 12 }}
        // onChange={onChange}
      />
      <CancelButton>Cancel / Refund</CancelButton>
    </Container>
  );
};

export default OrderSettings;
