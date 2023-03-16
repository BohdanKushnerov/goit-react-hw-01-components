import PropTypes from 'prop-types';
import {
  SectionStats,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStats>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem className="item" key={id}>
              <Label className="label">{label}</Label>
              <Percentage className="percentage">{percentage}%</Percentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </SectionStats>
  );
};

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
