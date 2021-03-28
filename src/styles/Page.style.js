import styled, { css } from 'styled-components';

export const Page = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    position: relative;

    &::before {
      background-color: ${theme.colors.white};
      background-image: linear-gradient(0deg, ${theme.colors.white} 55%, ${theme.colors.background} 90%);
      content: '';
      height: 500px;
      left: 0px;
      position: absolute;
      right: 0%;
      top: 0px;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    z-index: 10;

    @media (max-width: ${theme.breakpoints.md}) {
      align-items: center;
      flex-direction: column;
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 15px;
    position: relative;

    @media (max-width: ${theme.breakpoints.md}) {
      margin-bottom: 10px;
      margin-right: 0px;
    }
  `}
`;

export const LogoImage = styled.img`
  height: 32px;
  left: 0;
  position: absolute;
  width: 32px;
  z-index: -1;
`;

export const LogoTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 26px;
    font-weight: 700;
    line-height: 20px;
    margin-left: 40px;
    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;

export const LogoSubtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 12px;
    font-weight: 700;
    margin-left: 40px;
    text-align: left;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding: 0px 10px;
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    margin: 20px 0px;

    @media (max-width: ${theme.breakpoints.md}) {
      flex-direction: column-reverse;
    }
  `}
`;
