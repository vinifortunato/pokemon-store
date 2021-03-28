import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    align-items: flex-start;
    display: flex;
    flex: 3;

    @media (max-width: ${theme.breakpoints.lg}) {
      flex: 2;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      flex: 1;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-right: 35px;

    @media (max-width: ${theme.breakpoints.md}) {
      padding-right: 0px;
    }
  `}
`;
