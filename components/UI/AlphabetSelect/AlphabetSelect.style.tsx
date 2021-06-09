import styled from '@emotion/styled';
import { Row, Radio } from 'antd';

export const Container = styled(Row)`
  background-color: var(--white);
  padding: 40px 0;
`;

export const RadioGroup = styled(Radio.Group)`
  display: flex;
  width: 100%;

  .ant-radio-button-wrapper {
    border: none;
    border-bottom: 3px solid var(--outline-secondary);
    padding: 0 0 40px 0;
    color: var(--text-tertiary);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  .ant-radio-button-wrapper::before {
    border: none;
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    background-color: transparent;
  }

  .ant-radio-button-wrapper-checked::before {
    background-color: var(--white);
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background-color: transparent;
    color: var(--text-tertiary);
    outline: none;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    color: var(--text-tertiary);
    background-color: transparent;
    box-shadow: none;
    border-color: var(--light-blue);
  }

  //.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):visited {
  //  box-shadow: none;
  //}

  .ant-radio-button-wrapper-checked:hover {
    border-bottom: 3px solid var(--light-blue);
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    top: 0;
    left: 0;
    padding: 0;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover::before {
    background-color: var(--white);
  }

  .ant-radio-button-wrapper-checked:active {
    border: none;
  }
`;

export const RadioButton = styled(Radio.Button)`
  flex: 1;
`;
