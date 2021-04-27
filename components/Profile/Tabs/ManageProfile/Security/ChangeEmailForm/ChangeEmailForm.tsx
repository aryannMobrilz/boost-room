import { FC } from 'react';

import { Row, Col, Input } from 'antd';
import { FormItem, Button } from './ChangeEmailForm.style';

const ChangeEmailForm: FC = () => {
  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 9 }}>
          <FormItem name="password" label="Current Password">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 9 }}>
          <FormItem name="new_email" label="New Email Address">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 9 }}>
          <FormItem name="confirm_email" label="Confirm New Email Address">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 9 }}>
          <Button>Change Email</Button>
        </Col>
      </Row>
    </>
  );
};

export default ChangeEmailForm;
