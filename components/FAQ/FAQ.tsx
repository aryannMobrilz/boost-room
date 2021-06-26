import { FC } from 'react';

import { Col } from 'antd';
import { TextBlock, TextCollapse } from '@/components/UI';
import { Title, Button } from './FAQ.style';

export interface FAQProps {
  more?: boolean;
}

const FAQ: FC<FAQProps> = ({ more }) => {
  return (
    <Col span={24}>
      <Title>Boostroom FAQ</Title>
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat,
        vitae viverra magna maximus ac. Aliquam id velit nec nulla sollicitudin rutrum. Vestibulum
        cursus nec enim ac blandit. Fusce eu augue eros. Fusce in bibendum risus. Fusce feugiat eget
        lorem a molestie. Etiam dui nulla, gravida quis ex sit amet, blandit tristique magna. In vel
        enim auctor, hendrerit orci lacinia, vulputate metus.
      </TextBlock>
      <TextCollapse
        items={[
          {
            id: 1,
            title: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut?',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat, vitae viverra magna maximus ac. Aliquam id velit nec nulla sollicitudin rutrum. Vestibulum cursus nec enim ac blandit. Fusce eu augue eros. Fusce in bibendum risus. Fusce feugiat eget lorem a molestie. Etiam dui nulla, gravida quis ex sit amet, blandit tristique magna. In vel enim auctor, hendrerit orci lacinia, vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat, vitae viverra magna maximus ac. Aliquam id velit nec nulla sollicitudin rutrum. Vestibulum cursus nec enim ac blandit. Fusce eu augue eros. Fusce in bibendum risus. Fusce feugiat eget lorem a molestie. Etiam dui nulla, gravida quis ex sit amet, blandit tristique magna. In vel enim auctor, hendrerit orci lacinia, vulputate metus. '
          },
          {
            id: 2,
            title: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut?',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat, vitae viverra magna maximus ac. Aliquam id velit nec nulla sollicitudin rutrum. Vestibulum cursus nec enim ac blandit. Fusce eu augue eros. Fusce in bibendum risus. Fusce feugiat eget lorem a molestie. Etiam dui nulla, gravida quis ex sit amet, blandit tristique magna. In vel enim auctor, hendrerit orci lacinia, vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat, vitae viverra magna maximus ac. Aliquam id velit nec nulla sollicitudin rutrum. Vestibulum cursus nec enim ac blandit. Fusce eu augue eros. Fusce in bibendum risus. Fusce feugiat eget lorem a molestie. Etiam dui nulla, gravida quis ex sit amet, blandit tristique magna. In vel enim auctor, hendrerit orci lacinia, vulputate metus. '
          },
          {
            id: 3,
            title: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut?',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat, vitae viverra magna maximus ac. Aliquam id velit nec nulla sollicitudin rutrum. Vestibulum cursus nec enim ac blandit. Fusce eu augue eros. Fusce in bibendum risus. Fusce feugiat eget lorem a molestie. Etiam dui nulla, gravida quis ex sit amet, blandit tristique magna. In vel enim auctor, hendrerit orci lacinia, vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan hendrerit erat, vitae viverra magna maximus ac. Aliquam id velit nec nulla sollicitudin rutrum. Vestibulum cursus nec enim ac blandit. Fusce eu augue eros. Fusce in bibendum risus. Fusce feugiat eget lorem a molestie. Etiam dui nulla, gravida quis ex sit amet, blandit tristique magna. In vel enim auctor, hendrerit orci lacinia, vulputate metus. '
          }
        ]}
      />
      {more && <Button>Show more FAQ</Button>}
    </Col>
  );
};

export default FAQ;
