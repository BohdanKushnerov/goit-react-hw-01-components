import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;
  width: 150px;
  height: 50px;

  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
