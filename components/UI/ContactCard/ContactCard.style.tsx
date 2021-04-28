import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  background-color: var(--white);
  padding: 20px 40px;
  height: 96px;
  border-radius: 5px;
  border-color: var(--border-primary);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 25px;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-tertiary);
`;

export const Title = styled.span`
  display: block;
  font-weight: 600;
`;
