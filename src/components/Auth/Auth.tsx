import { FC } from 'react';
import { Form as AntForm } from 'antd';

import Header from './Header/Header';
// import Form from './Form/Form';
import Footer from './Footer/Footer';

import { Container } from './Auth.style';

export interface AuthProps {
  span: number;
}

const Auth: FC<AuthProps> = ({ span }) => {
  const [form] = AntForm.useForm();
  // const onSubmit = () => {};

  return (
    <Container span={span}>
      <Header />
      {/*<Form layout="vertical" form={form} />*/}
      <Footer />
    </Container>
  );
};

export default Auth;
