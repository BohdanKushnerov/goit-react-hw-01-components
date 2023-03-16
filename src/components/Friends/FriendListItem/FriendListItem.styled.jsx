import styled from '@emotion/styled';

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
