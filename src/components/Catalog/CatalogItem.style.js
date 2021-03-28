import styled, { css } from 'styled-components';
import { hexToRgba } from '@src/utils';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 115px;
    margin: 20px 0px;
    width: 334px;

    &:nth-child(2n + 1) {
      margin-right: auto;
    }

    @media (max-width: ${theme.breakpoints.lg}) {
      width: 100%;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    background-image: url('/assets/images/catalog-item-pattern.svg'), url('/assets/images/catalog-item-bg.svg');
    background-position: 36% 10%, right center;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: 0px 10px 20px ${hexToRgba(theme.colors.primary, 0.4)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    width: 100%;
  `}
`;

export const Image = styled.img`
  bottom: 10px;
  cursor: pointer;
  height: 130px;
  position: absolute;
  right: 10px;
  width: 130px;
`;

export const Id = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 26px;
    font-weight: 700;

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  `}
`;

export const ButtonAdapter = styled.div`
  max-width: 80px;
`;
