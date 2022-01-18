import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticList,
  StatisticItems,
  Total,
  PositivePercentage,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticList>
        <StatisticItems key={'good'}>good: {good}</StatisticItems>
        <StatisticItems key={'neutral'}>neutral: {neutral}</StatisticItems>
        <StatisticItems key={'bad'}>bad: {bad}</StatisticItems>
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
