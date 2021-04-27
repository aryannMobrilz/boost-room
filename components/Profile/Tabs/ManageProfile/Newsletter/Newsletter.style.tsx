import styled from '@emotion/styled';
import { Row, Divider, Typography } from 'antd';

export const Container = styled(Row)`
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px var(--border-primary);
  background-color: var(--white);
`;

export const SectionTitle = styled(Typography.Title)`
  font-size: 26px !important;
  font-weight: bold;
  color: var(--text-tertiary);
  margin: 0 !important;
`;

export const NewLine = styled(Divider)`
  margin-top: 15px !important;
  margin-bottom: 15px !important;
`;

export const FormTitle = styled(Typography.Title)`
  margin-top: 25px;
  margin-bottom: 3px !important;
  font-size: 22px !important;
  font-weight: 600;
  color: var(--text-tertiary);
`;

export const FormInfo = styled(Typography.Text)`
  display: block;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 25px;
`;
