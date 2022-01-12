import React from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsKey = Object.keys(options);
  // console.log(optionsKey)
  return (
    <>
      <h1>Please leave feedback</h1>

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
