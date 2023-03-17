import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: auto;

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.colors.boxShadow};
  border-radius: 5px;
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

  background-color: ${p => p.theme.colors.secondaryBcg};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 16px;
  border: 1px solid ${p => p.theme.colors.gray};

  :first-of-type {
    border-radius: 0 0 0 5px;
  }

  :last-child {
    border-radius: 0 0 5px 0;
  }
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
