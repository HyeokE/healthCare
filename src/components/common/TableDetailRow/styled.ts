import styled, { css } from 'styled-components';

export const DetailRow = styled.tr<{ isOpen: boolean }>`
  ${(props) =>
    props.isOpen
      ? css`
          display: static;
        `
      : css`
          display: none;
        `};
  border-bottom: 1px solid ${(props) => props.theme.color.grey600};
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
`;
