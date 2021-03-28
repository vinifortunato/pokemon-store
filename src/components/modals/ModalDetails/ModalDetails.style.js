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
    z-index: 20;

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

    @media (max-width: ${theme.breakpoints.sm}) {
      left: 10px;
      right: 10px;
      transform: translate(0%, 0%);
      width: auto;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Resume = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;

    @media (max-width: ${theme.breakpoints.xs}) {
      align-items: center;
      flex-direction: column;
    }
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    height: 130px;
    margin-right: 20px;
    width: 130px;

    @media (max-width: ${theme.breakpoints.xs}) {
      margin-right: 0px;
    }
  `}
`;

export const ResumeDetails = styled.div`
  ${({ theme }) => css`
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.xs}) {
      align-items: center;
    }
  `}
`;

export const Id = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;

export const Tags = styled.div`
  align-items: center;
  display: flex;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

export const ButtonCloseAdapter = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;
