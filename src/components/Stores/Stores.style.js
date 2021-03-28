import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  align-items: flex-start;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px 0px;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${theme.breakpoints.lg}) {
      max-width: 732px;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      max-width: 488px;
    }
  `}
`;
