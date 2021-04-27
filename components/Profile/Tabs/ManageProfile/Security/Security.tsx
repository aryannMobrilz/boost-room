import { FC } from 'react';

import { Col, Form } from 'antd';
import ChangeEmailForm from './ChangeEmailForm/ChangeEmailForm';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';
import {
  Container,
  SectionTitle,
  NewLine,
  FormTitle,
  FormInfo,
  CurrentEmail
} from './Security.style';

const Security: FC = () => {
  const [form] = Form.useForm();

  // const onFinish = (data: unknown) => {
  //   console.log('data', data);
  // };

  return (
    <Container>
      <Col span={24}>
        <SectionTitle>Security Information</SectionTitle>
      </Col>
      <NewLine />
      <Col span={24}>
        <Form form={form} layout="vertical">
          {/* <FormTitle margin={25}>2-Step Verification</FormTitle> */}
          {/* <FormInfo> */}
          {/*  Add an extra security layer by activating a 2-step verification on your Boostroom */}
          {/*  account. */}
          {/* </FormInfo> */}

          {/* Margin 25 is temporary before 2-step verification feature */}
          <FormTitle margin={25}>Change Email Address</FormTitle>
          <FormInfo>
            Your current email is <CurrentEmail>adam.smiht@mail.com</CurrentEmail>
          </FormInfo>
          <ChangeEmailForm />
          <FormTitle>Change Password</FormTitle>
          <FormInfo>
            Keep your account safe. Do not share password with anyone you don&apos;t trust.
          </FormInfo>
          <ChangePasswordForm />
        </Form>
      </Col>
    </Container>
  );
};

export default Security;
