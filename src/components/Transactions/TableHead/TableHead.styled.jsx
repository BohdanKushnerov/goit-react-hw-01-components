import styled from '@emotion/styled';

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
