import { FC } from 'react';

import { Row, Col, Input, DatePicker } from 'antd';
import { FormItem } from './PersonalInfoFrom.style';

const PersonalInfoForm: FC = () => {
  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 11 }}>
          <FormItem name="first_name" label="First name">
            <Input />
          </FormItem>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 11, push: 2 }}>
          <FormItem name="last_name" label="Last name">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 11 }}>
          <FormItem name="country" label="Country">
            <Input />
          </FormItem>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 11, push: 2 }}>
          <FormItem name="address" label="Address">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 11 }}>
          <FormItem name="date_of_birth" label="Birthday">
            <DatePicker format="2015/01/01" />
          </FormItem>
        </Col>
      </Row>
    </>
  );
};

export default PersonalInfoForm;
