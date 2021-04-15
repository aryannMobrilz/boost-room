import { FC } from 'react';

import { Row, Col, Form, Input, DatePicker } from 'antd';

const PersonalInfoForm: FC = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Form.Item name="first_name" label="First name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="last_name" label="Last name">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item name="country" label="Country">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="address" label="Address">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item name="date_of_birth" label="Birthday">
            <DatePicker format="2015/01/01" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default PersonalInfoForm;
