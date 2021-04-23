import { FC } from 'react';

import { Row, Col, Form, Input, Select } from 'antd';

const ContactInfoForm: FC = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Select inputValue="Facebook">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Col>
        <Col span={12}>
          <Form.Item name="address" label="Address">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default ContactInfoForm;
