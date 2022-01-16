import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticList,
  StatisticItems,
  Total,
  PositivePercentage,
} from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => {
  const stateEntries = Object.entries(options);

  return (
    <>
      <StatisticList>
        {stateEntries.map(([key, value]) => {
          return (
            <StatisticItems key={key}>
              {key}: {value}
            </StatisticItems>
          );
        })}
      </StatisticList>
      <Total>Total: {total}</Total>
      <PositivePercentage positivePercentage={positivePercentage}>
        Positive feedback: {positivePercentage}%
      </PositivePercentage>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
