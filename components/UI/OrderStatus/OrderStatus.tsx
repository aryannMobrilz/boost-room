import { FC } from 'react';

import Image from 'next/image';
import { Container, StatusName } from './OrderStatus.style';

const statuses = {
  finding: { color: '', label: 'Finding player', hasIcon: true },
  preparing: { color: 'orange', label: 'Preparing to start', hasIcon: true },
  started: { color: 'sky-blue', label: 'Order started', hasIcon: true },
  finished: { color: 'sky-blue', label: 'Order finished', hasIcon: true },
  completed: { color: 'light-green', label: 'Order completed', hasIcon: false },
  canceled: { color: 'red', label: 'Canceled', hasIcon: false }
};

export interface OrderStatusProps {
  status: keyof typeof statuses;
}

const OrderStatus: FC<OrderStatusProps> = ({ status }) => {
  return (
    <Container>
      {statuses[status].hasIcon && (
        <Image src={`/assets/icons/statuses/${status}.svg`} width={30} height={30} />
      )}
      <StatusName color={statuses[status].color} hasIcon={statuses[status].hasIcon}>
        {statuses[status].label}
      </StatusName>
    </Container>
  );
};

export default OrderStatus;
