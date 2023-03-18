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

export const Thead = styled.thead`
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bcgThead};
`;

export const Th = styled.th`
  padding: 5px;
  border: 1px solid ${p => p.theme.colors.gray};

  :not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.white};
  }
`;

export const TableData = styled.td`
  padding: 5px;

  width: 150px;

  text-align: center;
  border: 1px solid ${p => p.theme.colors.gray};
`;
