import { FC } from 'react';
import { useDeviceDetect } from '@/hooks';

import Image from 'next/image';
import { Col } from 'antd';
import {
  Container,
  Row,
  Branding,
  Menu,
  SubMenu,
  ItemGroup,
  Item,
  SearchBar,
  ButtonsBlock,
  OutlineButton,
  AuthButton,
  ActionButton
} from './Header.style';
import { MobileMenu } from '@/components/UI';

type Game = {
  key: string;
  name: string;
};

type User = {
  key: string;
  property: string;
};

export interface HeaderProps {
  isAuthorized: boolean;
  games: Game[];
  user: User[];
}

const Header: FC<HeaderProps> = ({ isAuthorized, games, user }) => {
  const device = useDeviceDetect();

  return (
    <Container>
      {device && device.width < 768 ? (
        <MobileMenu>
          <Branding>Boostroom</Branding>
        </MobileMenu>
      ) : (
        <Row>
          <Col xs={0} md={3}>
            <Branding>Boostroom</Branding>
          </Col>
          <Col span={8}>
            <Menu mode="horizontal">
              <SubMenu key="games" title="Games">
                <ItemGroup>
                  {games.map(({ key, name }) => (
                    <Item key={key}>{name}</Item>
                  ))}
                </ItemGroup>
              </SubMenu>
              <SubMenu key="user-info" title="User Info">
                <ItemGroup>
                  {user.map(({ key, property }) => (
                    <Item key={key}>{property}</Item>
                  ))}
                </ItemGroup>
              </SubMenu>
              <SubMenu key="jobs" title="Jobs" />
              <SubMenu key="support" title="24/7 Support" />
            </Menu>
          </Col>
          <Col push={1} span={5}>
            <SearchBar
              size="large"
              placeholder="Search for games..."
              prefix={<Image src="/assets/icons/form/search-white.svg" width={14} height={14} />}
            />
          </Col>
          {isAuthorized ? (
            <ButtonsBlock push={3} span={5}>
              <ActionButton>Sell</ActionButton>
              <AuthButton>Log In</AuthButton>
            </ButtonsBlock>
          ) : (
            <ButtonsBlock push={3} span={5}>
              <OutlineButton>Job Apply</OutlineButton>
              <AuthButton>Log In</AuthButton>
            </ButtonsBlock>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Header;
