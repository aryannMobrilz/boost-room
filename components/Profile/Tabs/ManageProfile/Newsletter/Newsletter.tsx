import { FC } from 'react';

import { Col, Form } from 'antd';
import NewsletterForm from './NewsletterForm/NewsletterForm';
import { Container, SectionTitle, NewLine, FormTitle, FormInfo } from './Newsletter.style';

const Newsletter: FC = () => {
  const [form] = Form.useForm();

  // const onFinish = (data: unknown) => {
  //   console.log('data', data);
  // };

  return (
    <Container>
      <Col span={24}>
        <SectionTitle>Newsletter</SectionTitle>
      </Col>
      <NewLine />
      <Col span={24}>
        <Form form={form} layout="vertical">
          <FormTitle>Newsletter (Discounts & Promotions)</FormTitle>
          <FormInfo>
            Subscribe to our newsletter and get many surprises waiting for you! <br />
            Unsubscribe at any time you want.
          </FormInfo>
          <NewsletterForm />
        </Form>
      </Col>
    </Container>
  );
};

export default Newsletter;
