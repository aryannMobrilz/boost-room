import { useState, FC } from 'react';

import { Row } from 'antd';
import { Container, FormItem, Switch, Label } from './NewsletterForm.style';

const NewsletterForm: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <Row>
        <Container xs={{ span: 24 }}>
          <FormItem name="get_newsletter" valuePropName="checked">
            <Switch onChange={(value) => setIsChecked(value)} />
          </FormItem>
          <Label>The newsletter is currently {isChecked ? 'on' : 'off'}</Label>
        </Container>
      </Row>
    </>
  );
};

export default NewsletterForm;
