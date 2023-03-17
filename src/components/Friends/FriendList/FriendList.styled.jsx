import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;
  width: 150px;
  height: 50px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.colors.boxShadow};
  border-radius: 5px;
`;

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
