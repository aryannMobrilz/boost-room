import { FC } from 'react';

import { Col } from 'antd';
import { Container, Title, Divider, Game } from './PopularGameList.style';

export interface PopularGameListProps {
  title?: string;
  games: string[];
}

const PopularGameList: FC<PopularGameListProps> = ({ title, games }) => {
  return (
    <Col span={24}>
      {title && <Title>{title}</Title>}
      {title && <Divider />}
      <Container gutter={[40, 30]}>
        {games.map((game) => (
          <Col key={Math.random()} span={6}>
            <Game>{game}</Game>
          </Col>
        ))}
      </Container>
    </Col>
  );
};

export default PopularGameList;
