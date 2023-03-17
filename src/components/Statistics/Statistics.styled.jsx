import styled from '@emotion/styled';

export const SectionStats = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;

  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
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
