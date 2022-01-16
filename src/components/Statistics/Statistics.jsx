import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ options, total, positivePercentage }) => {
  const stateEntries = Object.entries(options);

  return (
    <>
      <ul>
        {stateEntries.map(([key, value]) => {
          return (
            <li key={key}>
              {key}: {value}
            </li>
          );
        })}
      </ul>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
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
