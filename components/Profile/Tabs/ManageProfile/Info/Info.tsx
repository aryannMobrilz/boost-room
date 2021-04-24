import { FC } from 'react';

import { Col, Divider, Typography, Form } from 'antd';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm/ContactInfoForm';
import { Container } from './Info.style';

const Info: FC = () => {
  const [form] = Form.useForm();

  // const onFinish = (data: unknown) => {
  //   console.log('data', data);
  // };

  return (
    <Container>
      <Col span={24}>
        <Typography.Title level={4}>Personal information</Typography.Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form form={form} layout="vertical">
          <Typography.Title level={5}>Info</Typography.Title>
          <PersonalInfoForm />
          <Typography.Title level={5}>Contact Information</Typography.Title>
          <Typography.Text>Choose your preferred contact method</Typography.Text>
          <ContactInfoForm />
        </Form>
      </Col>
    </Container>
  );
};

export default Info;
