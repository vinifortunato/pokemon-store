import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;

  &:not(:first-child) {
    margin: 10px 0px;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

export const Image = styled.img`
  width: 70px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 400;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Price = styled.p`
  font-size: 12px;
  font-weight: 700;
`;
