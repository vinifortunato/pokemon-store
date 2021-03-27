import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  ${({ theme, backgroundColor }) => css`
    align-items: center;
    background-color: ${theme.colors.tags[backgroundColor]};
    border-radius: 3px;
    display: flex;
    justify-content: center;
    max-height: 24px;
    padding: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 12px;
    font-weight: 500;
    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;

export const Image = styled.img`
  height: 14px;
  margin-right: 5px;
  width: auto;
`;
