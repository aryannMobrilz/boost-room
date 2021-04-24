import { FC } from 'react';

import Image from 'next/image';
import { Container, Title } from './StatusTag.style';

const statuses = {
  purchased: '/assets/icons/transaction-statuses/purchased.svg',
  refundPending: '/assets/icons/transaction-statuses/refund-pending.svg',
  refundCompleted: '/assets/icons/transaction-statuses/refund-completed.svg',
  refundDeclined: '/assets/icons/transaction-statuses/refund-declined.svg'
};

export interface StatusTagProps {
  status: keyof typeof statuses;
  title: string;
}

const StatusTag: FC<StatusTagProps> = ({ status, title }) => {
  return (
    <Container>
      <Image src={statuses[status]} width={13} height={13} />
      <Title>{title}</Title>
    </Container>
  );
};

export default StatusTag;
