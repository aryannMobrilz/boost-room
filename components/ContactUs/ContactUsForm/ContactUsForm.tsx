import { FC } from 'react';

import { Row, Col, Input } from 'antd';
import { FormItem } from './ContactUsForm.style';

const ContactUsForm: FC = () => {
  return (
    <>
      <Row gutter={[25, 40]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <FormItem name="first_name" label="First name">
            <Input />
          </FormItem>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <FormItem name="last_name" label="Last name">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={[25, 40]}>
        <Col xs={{ span: 24 }}>
          <FormItem name="email" label="Email address">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={[25, 40]}>
        <Col xs={{ span: 24 }}>
          <FormItem name="email" label="Email address">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={[25, 40]}>
        <Col xs={{ span: 24 }}>
          <FormItem name="email" label="Email address">
            <Input.TextArea autoSize={{ minRows: 6, maxRows: 12 }} />
          </FormItem>
        </Col>
      </Row>
    </>
  );
};

export default ContactUsForm;
