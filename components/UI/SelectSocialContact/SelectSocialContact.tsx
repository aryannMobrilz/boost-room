import { FC } from 'react';

import Image from 'next/image';
import { Row, Col, Select, Input } from 'antd';
import { FormItem, ArrowRight, AddButton, CloseButton } from './SelectSocialContact.style';

export interface SelectSocialContactProps {
  socials: Record<string, string | number>[];
}

const SelectSocialContact: FC<SelectSocialContactProps> = ({ socials }) => {
  return (
    <Row>
      <Col span={10}>
        <FormItem>
          <Select placeholder="Choose Contact / Socials">
            {socials.map(({ id, label }) => (
              <Select.Option key={id} value={id}>
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
        <FormItem name="address">
          <Input />
        </FormItem>
      </Col>
      <Col span={1} push={1}>
        <CloseButton icon={<Image src="/assets/icons/close.svg" width={22} height={22} />} />
      </Col>
      <Col span={24}>
        <AddButton icon={<Image src="/assets/icons/add.svg" width={25} height={25} />}>
          Add Contact Method
        </AddButton>
      </Col>
    </Row>
  );
};

export default SelectSocialContact;
