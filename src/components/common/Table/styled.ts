import styled from 'styled-components';

export const StyledTable = styled.table`
  border: 1px solid ${(props) => props.theme.color.blue400};
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0.25em 0.5em 0 ${(props) => props.theme.color.grey700};
`;
export const StyledThead = styled.thead`
  border-bottom: 2px solid ${(props) => props.theme.color.grey700};
  background: ${(props) => props.theme.color.grey100};
`;
export const StyledTh = styled.th`
  text-align: center;
  padding: 10px 20px;
  border-right: 2px solid ${(props) => props.theme.color.blue400};
  font-size: ${(props) => props.theme.fontSize.body2};
  &:last-child {
    border-right: none;
  }
`;
export const StyledTbody = styled.tbody``;
export const StyledTr = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.color.blue400};
`;
export const StyledTd = styled.td`
  text-align: center;
  vertical-align: middle;
  padding: 15px 0;
  margin: auto;
  font-size: ${(props) => props.theme.fontSize.body2};
  &:last-child {
    border-right: none;
  }
`;
