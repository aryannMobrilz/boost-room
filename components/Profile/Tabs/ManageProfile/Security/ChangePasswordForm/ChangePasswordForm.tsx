import { FC } from 'react';

import { Row, Col, Input } from 'antd';
import { FormItem, Button } from './ChangePasswordForm.style';

const ChangePasswordForm: FC = () => {
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
          <FormItem name="new_password" label="New Password">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 9 }}>
          <FormItem name="confirm_password" label="Confirm New Password">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 9 }}>
          <Button>Change Password</Button>
        </Col>
      </Row>
    </>
  );
};

export default ChangePasswordForm;
