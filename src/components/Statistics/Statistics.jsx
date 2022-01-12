import React from 'react';

const Statistics = ({ options, total, positivePercentage }) => {
  const stateEntries = Object.entries(options);

  return (
    <>
      <h2>Statistics</h2>
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

export default Statistics;
