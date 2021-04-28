import { FC } from 'react';

import Image from 'next/image';
import { Collapse, Panel } from './TextCollapse.style';

export interface TextCollapseProps {
  items: { id: number; title: string; content: string }[];
}

const TextCollapse: FC<TextCollapseProps> = ({ items }) => {
  return (
    <Collapse
      expandIconPosition="right"
      expandIcon={(props) => (
        <Image
          src={props.isActive ? '/assets/icons/minus.svg' : '/assets/icons/plus.svg'}
          height={45}
          width={45}
        />
      )}>
      {items.map(({ id, title, content }) => (
        <Panel key={id} header={title}>
          {content}
        </Panel>
      ))}
    </Collapse>
  );
};

export default TextCollapse;
