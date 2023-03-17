import styled from '@emotion/styled';

export const SectionStats = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.colors.boxShadow};
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin: 0 auto;
  padding: 16px;

  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  padding: 10px;

  background-color: ${getRandomHexColor};

  :first-of-type {
    border-radius: 0 0 0 5px;
  }

  :last-child {
    border-radius: 0 0 5px 0;
  }
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${p => p.theme.colors.white};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
