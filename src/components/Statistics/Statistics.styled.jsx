import styled from '@emotion/styled';

export const SectionStats = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 350px;
`;

export const Title = styled.h2`
  margin: 0 auto;
  padding: 16px;

  text-transform: Uppercase;
`;

export const StatsList = styled.ul`
  display: flex;

  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 5px;

  padding: 10px;

  background-color: ${getRandomHexColor};
  list-style: none;
`;

export const Label = styled.span`
  color: white;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
