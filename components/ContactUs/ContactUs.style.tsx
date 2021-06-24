import styled from '@emotion/styled';
import { Row, Form as AntForm, Button, Typography } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Form = styled(AntForm)`
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const Title = styled(Typography.Title)`
  font-size: 24px !important;
  color: var(--text-tertiary) !important;
  margin: 0 0 5px 0 !important;

  ${mediaQuery.sm`
    font-size: 26px !important;
  `}

  ${mediaQuery.md`
    font-size: 28px !important;
  `}

  ${mediaQuery.lg`
    font-size: 30px !important;
  `}

  ${mediaQuery.xl`
    font-size: 32px !important;
  `}
`;

export const SubmitButton = styled(Button)`
  height: auto;
  margin-top: 15px;
  padding: 10px 59px 10px 60px;
  border-radius: 3px;
  border: none;
  background-color: var(--light-blue);
`;

export const ContactMethods = styled(Row)`
  margin-bottom: 40px;
`;
