import { FC } from 'react';

import { Col, RadioChangeEvent } from 'antd';
import { Container, RadioGroup, RadioButton } from './AlphabetSelect.style';
import { CommonContainer } from '@/components/layout/containers';

export interface AlphabetSelectProps {
  alphabet: string[];
  onChange: ((e: RadioChangeEvent) => void) | undefined;
}

const AlphabetSelect: FC<AlphabetSelectProps> = ({ alphabet, onChange }) => {
  return (
    <Container justify="center">
      <Col span={24}>
        <CommonContainer justify="center">
          <RadioGroup defaultValue="c" buttonStyle="solid" onChange={onChange}>
            {alphabet.map((letter) => (
              <RadioButton key={letter} value={letter}>
                {letter}
              </RadioButton>
            ))}
          </RadioGroup>
        </CommonContainer>
      </Col>
    </Container>
  );
};

export default AlphabetSelect;
