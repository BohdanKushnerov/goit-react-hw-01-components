import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;

  border-collapse: collapse;
  border: 1px solid #9c9b9b;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #c4cadd;
  }
`;
