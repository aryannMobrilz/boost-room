import styled from '@emotion/styled';
import { Row, Carousel as AntCarousel, Divider, Typography } from 'antd';

export const Container = styled(Row)`
  margin-top: 80px;
  margin-bottom: 160px;
`;

export const Title = styled(Typography.Title)`
  font-size: 40px !important;
  margin: 0 !important;
  font-weight: bold !important;
  text-align: center;
  color: var(--text-tertiary) !important;
`;

export const Info = styled(Typography.Text)`
  display: block;
  margin: 11px auto 50px auto;
  max-width: 600px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: var(--text-tertiary);
`;

export const Carousel = styled(AntCarousel)`
  padding-bottom: 100px;

  .slick-dots li {
    display: flex;
    align-items: center;
    border-radius: 3px;
    height: 5px;
    width: 24px;
    background-color: var(--border-primary);
  }

  .slick-dots li > button {
    height: 100%;
    width: 100%;
  }

  .slick-active button {
    background-color: var(--sky-blue) !important;
    width: 50px;
  }

  .slick-dots li > button {
    background-color: var(--border-secondary);
  }

  .slick-dots li.slick-active {
    background-color: var(--border-secondary);
  }
`;

export const Card = styled.div`
  display: flex;
  min-height: 446px;
  flex-direction: column;
  padding: 30px;
  border-radius: 3px;
  border: solid 1px rgba(171, 171, 171, 0.3);
  background-color: var(--white);
`;

export const NewLine = styled(Divider)`
  margin: 20px 0;
  background-color: var(--background-primary);
`;

export const CardTitle = styled(Typography.Title)`
  font-size: 20px !important;
  font-weight: bold !important;
  margin-top: 10px !important;
  color: var(--text-tertiary) !important;
`;

export const CardSubtitle = styled(Typography.Text)`
  display: block;
  font-size: 18px;
  color: var(--text-tertiary);
  margin-bottom: 15px;
`;

export const CardText = styled(Typography.Paragraph)`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 0 !important;

  .ant-typography-expand {
    color: var(--sky-blue);
  }
`;
