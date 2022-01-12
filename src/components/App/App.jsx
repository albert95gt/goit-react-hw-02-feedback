import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';

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
  incrementFeedbackBtn = event => {
    const { label } = event.currentTarget;
    console.log(label);
    // this.setState(prevState => {
    //   return {
    //     [label]: prevState[label] + 1,
    //   };
    // });
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
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.incrementFeedbackBtn}
        />
        {/* {stateKeys.map(key => {
          return (
            <button
              key={key}
              type="button"
              onClick={() => this.incrementFeedbackBtn(key)}
            >
              {key}
            </button>
          );
        })} */}

        <Statistics
          options={this.state}
          total={total}
          positivePercentage={positiveFeedback}
        />
      </>
    );
  }
}

export default App;
