import styled from '@emotion/styled';

export const Status = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return props.theme.colors.green;

      default:
        return props.theme.colors.red;
    }
  }};
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
