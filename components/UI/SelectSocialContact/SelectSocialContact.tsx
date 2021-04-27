import { useState, Fragment, FC } from 'react';

import Image from 'next/image';
import { Row, Col, Select, Input } from 'antd';
import { FormItem, ArrowRight, AddButton, CloseButton } from './SelectSocialContact.style';

type Social = { id: number; label: string };
type Contact = { social: string; username: string };

export interface SelectSocialContactProps {
  socials: Social[];
}

const SelectSocialContact: FC<SelectSocialContactProps> = ({ socials }) => {
  const [username, setUsername] = useState<string>('');
  const [social, setSocial] = useState<string>('');
  const [options, setOption] = useState<Contact[]>([{ social: 'Discord', username: 'J_smith' }]);

  const addContact = () => {
    setOption([...options, { social, username }]);
  };

  return (
    <Row>
      {options.map((option) => (
        <Fragment key={option.social}>
          <Col span={10}>
            <FormItem>
              <Select
                placeholder="Choose Contact / Socials"
                value={option.social}
                onChange={(value) => setSocial(value as string)}>
                {socials.map(({ id, label }) => (
                  <Select.Option key={id} value={label}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </FormItem>
          </Col>
          <ArrowRight span={2}>
            <Image src="/assets/icons/arrow-right.svg" width={8} height={13} />
          </ArrowRight>
          <Col span={10}>
            <FormItem name={option.social}>
              <Input defaultValue={option.username} onChange={(e) => setUsername(e.target.value)} />
            </FormItem>
          </Col>
          <Col span={1} push={1}>
            <CloseButton icon={<Image src="/assets/icons/close.svg" width={22} height={22} />} />
          </Col>
        </Fragment>
      ))}
      <Col span={24}>
        <AddButton
          icon={<Image src="/assets/icons/add.svg" width={25} height={25} />}
          onClick={addContact}>
          Add Contact Method
        </AddButton>
      </Col>
    </Row>
  );
};

export default SelectSocialContact;
