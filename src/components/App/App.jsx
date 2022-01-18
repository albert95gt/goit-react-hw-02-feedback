import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickFeedbackCount = event => {
    const options = event.currentTarget.textContent;

    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
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
    const stateKeys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(total);
    return (
      <Wrapper title="">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.onClickFeedbackCount}
          />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={!positiveFeedback ? 0 : positiveFeedback}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default App;
