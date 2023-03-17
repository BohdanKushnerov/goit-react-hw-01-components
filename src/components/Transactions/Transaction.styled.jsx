import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;

  border-collapse: collapse;
  border: 1px solid ${p => p.theme.colors.borderColorTable};
  box-shadow: ${p => p.theme.colors.boxShadow};
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: ${p => p.theme.colors.secondaryBcg};
  }
`;
