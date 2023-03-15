import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  height: auto;
`;

export const Image = styled.img`
  display: block;
  width: 150px;
  border-radius: 50%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 16px;
`;

export const Name = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.p`
  margin: 0;
`;

export const Location = styled.p`
  margin: 0;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding: 16px;
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-weight: bold;
`;
