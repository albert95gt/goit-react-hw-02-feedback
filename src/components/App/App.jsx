import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  getStateKeys = () => {
    return Object.keys(this.state);
  };
  getStateEntries = () => {
    return Object.entries(this.state);
  };
  incrementFeedbackBtn = key => {
    this.setState(state => {
      return {
        [key]: state[key] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const stateValue = Object.values(this.state);
    const total = stateValue.reduce((acc, value) => acc + value);
    return total;
  };
  countPositiveFeedbackPercentage = total => {
    const totalPercenage = (this.state.good / total) * 100;
    return Math.round(totalPercenage);
  };

  render() {
    const stateKeys = this.getStateKeys();
    const stateEntries = this.getStateEntries();
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <h1>Please leave feedback</h1>
        {stateKeys.map(key => {
          return (
            <button
              key={key}
              type="button"
              onClick={() => this.incrementFeedbackBtn(key)}
            >
              {key}
            </button>
          );
        })}

        <h2>Statistics</h2>
        <ul>
          {stateEntries.map(([key, value]) => {
            return (
              <li key={key}>
                {key}:<span>{value}</span>
              </li>
            );
          })}
        </ul>

        <p>Total: {total}</p>

        <p>Positive feedback: {positiveFeedback}%</p>
      </>
    );
  }
}

export default App;
