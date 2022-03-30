import styled from 'styled-components';

export const StyledTable = styled.table`
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.color.blue400};
  font-size: ${(props) => props.theme.fontSize.body2};
`;
export const StyledTh = styled.th`
  padding: 10px 20px;
  border-right: 1px solid ${(props) => props.theme.color.blue400};
  font-size: ${(props) => props.theme.fontSize.body1};
  &:last-child {
    border-right: none;
  }
`;
