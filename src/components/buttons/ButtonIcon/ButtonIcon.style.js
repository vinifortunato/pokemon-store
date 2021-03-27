import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ width, height }) => css`
    cursor: pointer;
    display: flex;
    height: ${height}px;
    padding: 5px;
    position: relative;
    width: ${width}px;
  `}
`;
