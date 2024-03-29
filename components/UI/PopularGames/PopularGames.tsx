import { FC } from 'react';

import { Col } from 'antd';
import { Container, Title, Info, Game, AllGamesButton } from './PopularGames.style';

export interface PopularGamesProps {
  games: string[];
}

const PopularGames: FC<PopularGamesProps> = ({ games }) => {
  return (
    <Col span={24}>
      <Title>Popular Gamer Marketplaces</Title>
      <Info>
        Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos
        et accusam et justo duo dolores et ea rebum.{' '}
      </Info>
      <Container gutter={{ sm: 20, md: 30, lg: 40 }}>
        {games.map((game) => (
          <Col key={Math.random()} xs={24} sm={12} md={8} xl={6}>
            <Game>{game}</Game>
          </Col>
        ))}
      </Container>
      <Info>
        Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum.
      </Info>
      <AllGamesButton type="primary">See all games!</AllGamesButton>
    </Col>
  );
};

export default PopularGames;
