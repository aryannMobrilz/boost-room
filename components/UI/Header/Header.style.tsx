import styled from '@emotion/styled';
import { Layout, Row as AntRow, Col, Menu as AntMenu, Input, Button, Typography } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Container = styled(Layout.Header)`
  padding: 18px 0;
  height: auto;
  line-height: 1;
`;

export const Row = styled(AntRow)`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;

  ${mediaQuery.md`
    padding: 0 40px;
  `}

  ${mediaQuery.xl`
    padding: 0 50px;
  `}
`;

export const Branding = styled(Typography.Title)`
  margin: 0 !important;
  font-size: 20px !important;
  color: var(--white) !important;

  ${mediaQuery.sm`
    font-size: 22px !important;
  `}

  ${mediaQuery.md`
    font-size: 24px !important;
  `}

  ${mediaQuery.lg`
    font-size: 26px !important;
  `}

  ${mediaQuery.xl`
    font-size: 28px !important;
  `}
`;

export const Menu = styled(AntMenu)`
  line-height: 1 !important;
  border: none;
  font-size: 12px;
  color: var(--white);
  background: transparent;

  ${mediaQuery.sm`
    font-size: 13px;
  `}

  ${mediaQuery.md`
    font-size: 14px;
  `}

  ${mediaQuery.lg`
    font-size: 15px;
  `}

  ${mediaQuery.xl`
    font-size: 16px;
  `}
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
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  line-height: 1;
  color: var(--white);
  margin-right: 15px;
  background-color: transparent;
  border: solid 1px var(--white);
  padding: 8px 16px;

  ${mediaQuery.sm`
    padding: 8px 18px;
    font-size: 15px;
  `}

  ${mediaQuery.md`
    padding: 10px 20px;
    font-size: 16px;
  `}

  ${mediaQuery.lg`
    padding: 10px 22px;
    font-size: 17px;
  `}

  ${mediaQuery.xl`
    padding: 10px 25px;
    font-size: 18px;
  `}
`;

export const AuthButton = styled(Button)`
  height: auto;
  display: block;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  border-radius: 3px;
  color: var(--white);
  background-color: var(--sky-blue);
  border: solid 1px var(--sky-blue);
  padding: 8px 16px;

  ${mediaQuery.sm`
    padding: 8px 18px;
    font-size: 15px;
  `}

  ${mediaQuery.md`
    padding: 10px 20px;
    font-size: 16px;
  `}

  ${mediaQuery.lg`
    padding: 10px 22px;
    font-size: 17px;
  `}

  ${mediaQuery.xl`
    padding: 10px 25px;
    font-size: 18px;
  `}
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
