import { FC } from 'react';

import {  Col } from 'antd';
import { Warning, ContactCard } from '@/components/UI';
import ContactUsForm from './ContactUsForm/ContactUsForm';
import { Form, Title, Info, SubmitButton, ContactMethods } from './ContactUs.style';

const ContactUs: FC = () => {
  return (
    <Col span={24}>
      <Title>Contact us via e-mail</Title>
      <Form layout="vertical">
        <ContactUsForm />
        <SubmitButton type="primary">Submit</SubmitButton>
      </Form>
      <Title>Other contact methods</Title>
      <Info>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat,
        vitae viverra magna maximus ac aliquam id velit nec nulla sollicitudin rutrum vestibulum
        cursus nec enim vitae viverra magna
      </Info>
      <Warning icon="/assets/icons/warning.svg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur.
      </Warning>
      <ContactMethods gutter={[25, 15]}>
        <Col span={12}>
          <ContactCard
            title="Discord"
            contact="BoostRoom#0001"
            icon="/assets/icons/contact-methods/discord.svg"
          />
        </Col>
        <Col span={12}>
          <ContactCard
            title="Viber"
            contact="+38762 390 582"
            icon="/assets/icons/contact-methods/viber.svg"
          />
        </Col>
        <Col span={12}>
          <ContactCard
            title="Messenger"
            contact="m.me/boostroomcom"
            icon="/assets/icons/contact-methods/messenger.svg"
          />
        </Col>
        <Col span={12}>
          <ContactCard
            title="WhatsApp"
            contact="+38762 390 582"
            icon="/assets/icons/contact-methods/whatsapp.svg"
          />
        </Col>
        <Col span={12}>
          <ContactCard
            title="Skype"
            contact="EU: boost.room.eu"
            alternativeContact="USA & Oceania: boost.room.us"
            icon="/assets/icons/contact-methods/skype.svg"
          />
        </Col>
        <Col span={12}>
          <ContactCard
            title="Support / E-mail"
            contact="sales@boostroom.com"
            icon="/assets/icons/contact-methods/email.svg"
          />
        </Col>
      </ContactMethods>
    </Col>
  );
};

export default ContactUs;
