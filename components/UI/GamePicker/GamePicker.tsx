import { FC, useState } from 'react';

import {} from 'antd';
import { CommonContainer } from '@/components/layout/containers';
import { AlphabetSelect, PopularGameList } from '@/components/UI';
import { Container, Letter } from './GamePicker.style';

export interface GamePickerProps {
  defaultLetter?: string;
  games: string[];
}

const GamePicker: FC<GamePickerProps> = ({ defaultLetter = 'A', games }) => {
  const [letter, setLetter] = useState(defaultLetter);

  return (
    <Container>
      <AlphabetSelect
        alphabet={[
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z'
        ]}
        onChange={({ target }) => setLetter(target.value)}
      />
      <CommonContainer justify="center">
        <Letter>{letter}</Letter>
        <PopularGameList games={games} />
      </CommonContainer>
    </Container>
  );
};

export default GamePicker;
