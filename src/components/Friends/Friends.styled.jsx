import styled from '@emotion/styled';

export const Friends = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 10px;
  padding: 15px;
  width: 150px;
  height: 50px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';

      default:
        return 'red';
    }
  }};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
