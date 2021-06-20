import { FC } from 'react';

import { Col } from 'antd';
import {
  Title,
  Info,
  Container,
  Service,
  Header,
  Heading,
  Icon,
  Game,
  More,
  Span
} from './PopularServices.style';
import Image from 'next/image';

export interface PopularServicesProps {
  services: { title: string; games: string[] }[];
}

const PopularServices: FC<PopularServicesProps> = ({ services }) => {
  return (
    <Col span={24}>
      <Title>Popular Games</Title>
      <Info>
        Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos
        et accusam et justo duo dolores et ea rebum.
      </Info>
      {/* gutter={[40, 30]} */}
      {/* gutter={{ xs: 8, sm: 16, md: 80, lg: 40 }} */}
      <Container gutter={{ sm: 10, md: 20, xl: 25 }}>
        {services.map((service) => (
          <Col key={Math.random()} xs={24} sm={12} md={8} xl={6}>
            <Service>
              <Header>
                <Icon />
                <Heading>{service.title}</Heading>
              </Header>
              {service.games.map((game) => (
                <Game key={Math.random()}>{game}</Game>
              ))}
              <More>
                <Span>See more</Span>
                <Image src="/assets/icons/arrow-right-sky-blue.svg" width={8} height={13} />
              </More>
            </Service>
          </Col>
        ))}
      </Container>
    </Col>
  );
};

export default PopularServices;
