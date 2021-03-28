import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    flex: 1;
    justify-content: center;
    position: relative;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 100%;
    }
  `}
`;

export const Input = styled.input`
  color: #747476;
  display: flex;
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  padding: 15px;
`;
