import styled, { css } from 'styled-components';
import { hexToRgba } from '@src/utils';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    margin: 10px 22px;
    width: 200px;

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 100%;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme, color }) => css`
    align-items: center;
    background-color: ${theme.colors.stores[color]};
    border-radius: 5px;
    box-shadow: 0px 10px 20px ${hexToRgba(theme.colors.primary, 0.4)};
    display: flex;
    padding: 10px;
    position: relative;
    width: 100%;
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const Image = styled.img`
  height: 64px;
  margin-right: 8px;
  width: 64px;
`;

export const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 26px;
    font-weight: 700;
    line-height: 20px;

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 15px;
    font-weight: 700;
  `}
`;
