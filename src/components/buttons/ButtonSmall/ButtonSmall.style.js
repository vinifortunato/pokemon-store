import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 3px;
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    padding: 5px 8px;
  `}
`;
