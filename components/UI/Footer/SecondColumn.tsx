import { FC } from 'react';

import Image from 'next/image';
import { Row, Col } from 'antd';
import { Subtitle, Text, Link, Social, SocialIcon } from './Footer.style';

const SecondColumn: FC = () => {
  return (
    <Row gutter={[12, 30]}>
      <Col span={24}>
        <Subtitle level={4}>Contact & Socials</Subtitle>
      </Col>
      <Col span={24}>
        <Text>
          Contact us through <Link href="#">Contact form</Link> or Live Chat Support
        </Text>
      </Col>
      <Col span={24}>
        <Social>
          <SocialIcon>
            <Image src="/assets/icons/socials/email.svg" height={14} width={21} />
          </SocialIcon>
          Support / E-mail
        </Social>
        <Text>sales@boostroom.com</Text>
      </Col>
      <Col span={24}>
        <Social>
          <SocialIcon>
            <Image src="/assets/icons/socials/skype.svg" height={21} width={21} />{' '}
          </SocialIcon>
          Skype
        </Social>
        <Text>EU: boost.room.eu</Text>
        <Text>USA & Oceania: boost.room.us</Text>
      </Col>
      <Col span={24}>
        <Social>
          <SocialIcon>
            <Image src="/assets/icons/socials/discord.svg" height={24} width={21} />
          </SocialIcon>
          Discord
        </Social>
        <Text>BoostRoom#0001</Text>
      </Col>
      <Col span={24}>
        <Social>
          <SocialIcon>
            <Image src="/assets/icons/socials/viber.svg" height={22} width={21} />{' '}
          </SocialIcon>
          Viber
        </Social>
        <Text>+38762 390 582</Text>
      </Col>
      <Col span={24}>
        <Social>
          <SocialIcon>
            <Image src="/assets/icons/socials/whatsapp.svg" height={20} width={20} />
          </SocialIcon>
          WhatsApp
        </Social>
        <Text>+38762 390 582</Text>
      </Col>
      <Col span={24}>
        <Social>
          <SocialIcon>
            <Image src="/assets/icons/socials/messenger.svg" height={20} width={20} />
          </SocialIcon>
          Messenger
        </Social>
        <Text>m.me/boostroomcom</Text>
      </Col>
    </Row>
  );
};

export default SecondColumn;
