import { FC } from 'react';

import Image from 'next/image';
import { Row, Col } from 'antd';
import { Title, Address, Subtitle, Text } from './Footer.style';

const FirstColumn: FC = () => {
  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Title level={2}>BoostRoom</Title>
      </Col>
      <Address span={24}>
        <Text>Address: 600 N Broad StreetSuite 5 # 829</Text>
        <Text>Middletown DE 19709, USA</Text>
      </Address>
      <Col span={24}>
        <Subtitle level={5}>We Accept</Subtitle>
      </Col>
      <Col span={12}>
        <Image src="/assets/icons/payment-methods/visa.svg" height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src="/assets/icons/payment-methods/mastercard.svg" height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src="/assets/icons/payment-methods/paypal.svg" height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src="/assets/icons/payment-methods/payoneer.svg" height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src="/assets/icons/payment-methods/skrill.svg" height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src="/assets/icons/payment-methods/payop.svg" height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src="/assets/icons/payment-methods/apple-pay.svg" height={40} width={80} />
      </Col>
      <Col span={24}>
        <Image src="/assets/icons/trustpilot.svg" height={63} width={125} />
      </Col>
      <Col span={24}>
        <Image src="/assets/icons/google-safe-browsing.svg" width={142} height={42} />
      </Col>
      <Col span={24}>
        <Image src="/assets/images/comodo-secure.png" height={90} width={140} />
      </Col>
    </Row>
  );
};

export default FirstColumn;
