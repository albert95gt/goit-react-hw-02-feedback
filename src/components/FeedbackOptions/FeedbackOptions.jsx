import React from 'react';

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

export default FeedbackOptions;
