import styled, { css } from 'styled-components';
import { hexToRgba } from '@src/utils';

export const Wrapper = styled.section`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 5px;
    box-shadow: 0px 10px 20px ${hexToRgba(theme.colors.black, 0.4)};
    display: flex;
    flex: 1;
    flex-direction: column;
    height: fit-content;
    padding: 10px;
    position: relative;
  `}
`;

export const Title = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const EmptyText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  margin-bottom: 10px;
`;
