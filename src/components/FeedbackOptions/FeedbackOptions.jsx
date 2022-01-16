import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsKey = Object.keys(options);

  return (
    <>
      {optionsKey.map(key => {
        return (
          <button key={key} type="button" onClick={onLeaveFeedback}>
            {key}
          </button>
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
