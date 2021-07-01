import { useState, FC } from 'react';

import Image from 'next/image';
import { Drawer } from 'antd';
import { HamburgerButton } from './MobileMenu.style';

const MobileMenu: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>();

  return (
    <>
      <HamburgerButton ghost onClick={() => setIsVisible(true)}>
        <Image src="/assets/icons/hamburger-menu.svg" width={40} height={40} />
      </HamburgerButton>
      <Drawer
        title="John Smith"
        width="90%"
        onClose={() => setIsVisible(false)}
        visible={isVisible}
        bodyStyle={{ paddingBottom: 80 }}>
        kkk
      </Drawer>
    </>
  );
};

export default MobileMenu;
