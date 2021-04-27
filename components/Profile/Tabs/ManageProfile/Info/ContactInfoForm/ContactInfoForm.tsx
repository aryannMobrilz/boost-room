import { FC } from 'react';

import { Row, Col } from 'antd';
import { SelectSocialContact } from '@/components/UI';
import { SaveButton } from './ContactInfoForm.style';

const ContactInfoForm: FC = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <SelectSocialContact
            socials={[
              { id: 0, label: 'Facebook' },
              { id: 1, label: 'Twitter' },
              { id: 2, label: 'Discord' }
            ]}
          />
        </Col>
        <Col span={24}>
          <SaveButton>Save Changes</SaveButton>
        </Col>
      </Row>
    </>
  );
};

export default ContactInfoForm;
