import styled from '@emotion/styled';

export const Thead = styled.thead`
  text-transform: uppercase;
  color: white;
  background-color: #6f6fff;
`;

export const Th = styled.th`
  padding: 5px;

  border-bottom: 1px solid white;
  :not(:last-child) {
    border-right: 1px solid white;
  }
`;
