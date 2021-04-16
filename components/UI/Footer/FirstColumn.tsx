import { FC } from 'react';

import Image from 'next/image';
import { Row, Col } from 'antd';
import { Title, Subtitle, Text } from './Footer.style';

import visaSVG from '@/public/assets/icons/payment-methods/visa.svg';
import mastercardSVG from '@/public/assets/icons/payment-methods/mastercard.svg';
import paypalSVG from '@/public/assets/icons/payment-methods/paypal.svg';
import payoneerSVG from '@/public/assets/icons/payment-methods/payoneer.svg';
import skrillSVG from '@/public/assets/icons/payment-methods/skrill.svg';
import payopSVG from '@/public/assets/icons/payment-methods/payop.svg';
import applePaySVG from '@/public/assets/icons/payment-methods/apple-pay.svg';
import trustpilotSVG from '@/public/assets/icons/trustpilot.svg';
import googleSafeBrowsingSVG from '@/public/assets/icons/google-safe-browsing.svg';
import comodoSecurePNG from '@/public/assets/images/comodo-secure.png';

const FirstColumn: FC = () => {
  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Title level={2}>BoostRoom</Title>
      </Col>
      <Col span={24}>
        <Text>Address: 600 Broadway</Text>
      </Col>
      <Col span={24}>
        <Subtitle level={4}>We Accept</Subtitle>
      </Col>
      <Col span={12}>
        <Image src={visaSVG} height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src={mastercardSVG} height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src={paypalSVG} height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src={payoneerSVG} height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src={skrillSVG} height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src={payopSVG} height={40} width={80} />
      </Col>
      <Col span={12}>
        <Image src={applePaySVG} height={40} width={80} />
      </Col>
      <Col span={24}>
        <Image src={trustpilotSVG} height={63} width={125} />
      </Col>
      <Col span={24}>
        <Image src={googleSafeBrowsingSVG} width={142} height={42} />
      </Col>
      <Col span={24}>
        <Image src={comodoSecurePNG} height={90} width={140} />
      </Col>
    </Row>
  );
};

export default FirstColumn;
