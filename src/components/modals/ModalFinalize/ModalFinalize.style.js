import styled, { css } from 'styled-components';
import { hexToRgba } from '@src/utils';

export const Wrapper = styled.div`
  ${({ theme, show }) => css`
    background-color: ${hexToRgba(theme.colors.black, 0.4)};
    height: 100%;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 100%;

    ${show
      ? css`
          opacity: 1;
          transition: opacity 100ms ease-in;
        `
      : css`
          opacity: 0;
          pointer-events: none;
          transition: opacity 100ms ease-out;
        `}
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 5px;
    box-shadow: 0px 10px 20px ${hexToRgba(theme.colors.black, 0.4)};
    left: 50%;
    padding: 15px;
    position: absolute;
    top: 30%;
    transform: translate(-50%, 0%);
    width: 400px;
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 16px;
    margin-bottom: 20px;
  `}
`;
