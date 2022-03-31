import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
  border: 1px solid ${(props) => props.theme.color.blue400};
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  max-width: 1140px;
  min-width: 1140px;
`;
export const StyledThead = styled.thead`
  box-shadow: 0 10px 10px 0 ${(props) => props.theme.color.grey400};
  background: ${(props) => props.theme.color.blue600};
`;
export const StyledTh = styled.th`
  text-align: center;
  padding: 15px 20px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.body2};

  &:last-child {
    border-right: none;
  }
`;
export const StyledTbody = styled.tbody``;
export const StyledTr = styled.tr<{ nth?: number; isOpen?: boolean }>`
  border-bottom: 1px solid ${(props) => props.theme.color.blue500};
  transition: all 0.3s ease-in-out;
  visibility: visible;
  ${(props) =>
    props.nth && props.nth % 2 == 0
      ? css`
          background: ${(props) => props.theme.color.blue100};
        `
      : css`
          background: ${(props) => props.theme.color.white};
        `};
`;

export const StyledTd = styled.td`
  text-align: center;
  vertical-align: middle;
  padding: 15px 0;
  margin: auto;
  font-size: ${(props) => props.theme.fontSize.body2};
  overflow: hidden;
`;
export const DetailSection = styled.div`
  font-size: ${(props) => props.theme.fontSize.body2};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Disease = styled.span`
  font-size: ${(props) => props.theme.fontSize.body2};
  padding: 0 10px;
  word-break: keep-all;
`;
