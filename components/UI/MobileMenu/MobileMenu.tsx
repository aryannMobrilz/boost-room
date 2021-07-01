import { useState, FC } from 'react';

import Image from 'next/image';
import { Drawer } from 'antd';
import { Container, HamburgerButton } from './MobileMenu.style';

const MobileMenu: FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>();

  return (
    <>
      <Container>
        {children}
        <HamburgerButton ghost onClick={() => setIsVisible(true)}>
          <Image src="/assets/icons/hamburger-menu.svg" width={30} height={30} />
        </HamburgerButton>
      </Container>
      <Drawer
        placement="left"
        title="John Smith"
        width="90%"
        onClose={() => setIsVisible(false)}
        visible={isVisible}>
        kkk
      </Drawer>
    </>
  );
};

export default MobileMenu;
