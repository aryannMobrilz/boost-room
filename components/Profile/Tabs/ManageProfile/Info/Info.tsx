import { FC } from 'react';

import { Col, Form } from 'antd';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm/ContactInfoForm';
import { Container, SectionTitle, NewLine, FormTitle, FormInfo } from './Info.style';

const Info: FC = () => {
  const [form] = Form.useForm();

  // const onFinish = (data: unknown) => {
  //   console.log('data', data);
  // };

  return (
    <Container>
      <Col span={24}>
        <SectionTitle>Personal information</SectionTitle>
      </Col>
      <NewLine />
      <Col span={24}>
        <Form form={form} layout="vertical">
          <FormTitle>Info</FormTitle>
          <PersonalInfoForm />
          <FormTitle margin={50}>Contact Information</FormTitle>
          <FormInfo>Choose your preferred contact method</FormInfo>
          <ContactInfoForm />
        </Form>
      </Col>
    </Container>
  );
};

export default Info;
