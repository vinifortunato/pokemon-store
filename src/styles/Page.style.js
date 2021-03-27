import styled, { css } from 'styled-components';

export const Page = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex: 1;
    justify-content: center;
    position: relative;

    &::before {
      background-color: red;
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
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;
