import { FC } from 'react';
import Image from 'next/image';

import { Col, FormInstance, Row } from 'antd';

import { CheckboxField, FormItem, InputField, PasswordField } from './Form.style';

import userSVG from '@/assets/icons/form/user.svg';
import atSignSVG from '@/assets/icons/form/at-sign.svg';

export interface FormProps {
  layout?: string | undefined;
  form: FormInstance;
}

const Form: FC<FormProps> = ({ layout, form }) => {
  return (
    <Form layout={layout} form={form}>
      <Row gutter={20}>
        <Col span={12}>
          <FormItem label="First Name">
            <InputField suffix={<Image src={userSVG} height={14} width={14} />} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Last Name">
            <InputField suffix={<Image src={userSVG} height={14} width={14} />} />
          </FormItem>
        </Col>
      </Row>
      <FormItem label="User Name">
        <InputField suffix={<Image src={userSVG} height={14} width={14} />} />
      </FormItem>
      <FormItem label="Email address">
        <InputField suffix={<Image src={atSignSVG} height={14} width={14} />} />
      </FormItem>
      <FormItem label="Password">
        <PasswordField />
      </FormItem>
      <FormItem label="Confirm Password">
        <PasswordField />
      </FormItem>
      <CheckboxField value="A">Send me the latest deals & offers</CheckboxField>
    </Form>
  );
};

export default Form;
