import { useState, FC } from 'react';

import { Col } from 'antd';
import { CoverImage } from '@/components/UI';
import { Container, Card, Paragraph } from './InfoCard.style';

type TabList = {
  key: string;
  tab: string;
};

export interface InfoCardProps {
  src: string;
  tabList: TabList[];
  content: Record<string, string[]>;
}

const InfoCard: FC<InfoCardProps> = ({ src, tabList, content }) => {
  const [key, setKey] = useState<string>(tabList[0].key);

  return (
    <Container>
      <Col xs={24} lg={13} xl={14}>
        <Card tabList={tabList} activeTabKey={key} onTabChange={(key) => setKey(key)}>
          {content[key]?.map((item) => (
            <Paragraph key={Math.random()}>{item}</Paragraph>
          ))}
        </Card>
      </Col>
      <CoverImage src={src} xs={0} lg={11} xl={10} />
    </Container>
  );
};

export default InfoCard;
