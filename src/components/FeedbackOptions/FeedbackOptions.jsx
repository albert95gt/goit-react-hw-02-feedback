import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsBtns } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsKey = Object.keys(options);

  return (
    <>
      {optionsKey.map(key => {
        return (
          <FeedbackOptionsBtns
            key={key}
            type="button"
            onClick={onLeaveFeedback}
          >
            {key}
          </FeedbackOptionsBtns>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
