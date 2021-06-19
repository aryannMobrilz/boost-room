import styled from '@emotion/styled';
import { Layout, Row as AntRow, Col, Menu as AntMenu, Input, Button, Typography } from 'antd';

export const Container = styled(Layout.Header)`
  padding: 18px 0;
  height: auto;
  line-height: 1;
`;
//

export const Row = styled(AntRow)`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Branding = styled(Typography.Title)`
  margin: 0 !important;
  font-size: 28px !important;
  color: var(--white) !important;
`;

export const Menu = styled(AntMenu)`
  line-height: 1 !important;
  border: none;
  font-size: 16px;
  color: var(--white);
  background: transparent;
`;

export const SubMenu = styled(AntMenu.SubMenu)`
  line-height: 1;
  margin: 0 20px !important;
  top: 0 !important;
  border: 0 !important;
`;

export const ItemGroup = styled(AntMenu.ItemGroup)``;

export const Item = styled(AntMenu.Item)``;

export const SearchBar = styled(Input)`
  width: 250px;
  line-height: 1;
  border: solid 1px var(--white);
  background-color: transparent;
  border-radius: 3px;
  padding: 10px 25px;

  input {
    height: 18px;
    background-color: transparent;
    line-height: 1;
    color: var(--white);
    margin-left: 11px;
  }

  input::placeholder {
    color: var(--white);
  }
`;

export const ButtonsBlock = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

export const OutlineButton = styled(Button)`
  height: auto;
  display: block;
  font-size: 18px;
  font-weight: bold;
  border-radius: 3px;
  line-height: 1;
  color: var(--white);
  margin-right: 15px;
  background-color: transparent;
  border: solid 1px var(--white);
  padding: 10px 25px;
`;

export const AuthButton = styled(Button)`
  height: auto;
  display: block;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  border-radius: 3px;
  color: var(--white);
  background-color: var(--sky-blue);
  border: solid 1px var(--sky-blue);
  padding: 10px 30px;
`;

export const ActionButton = styled(Button)`
  height: auto;
  display: block;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  border-radius: 3px;
  color: var(--text-tertiary);
  margin-right: 15px;
  background-color: var(--white);
  border: solid 1px var(--white);
  padding: 10px 45px;
`;
