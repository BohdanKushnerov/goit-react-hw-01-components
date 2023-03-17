import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: auto;

  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  display: block;

  width: 100px;
  border-radius: 50%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 26px;
`;

export const StatsList = styled.ul`
  display: flex;

  background-color: #d2d2ff;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 16px;
  border: 1px solid gray;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
