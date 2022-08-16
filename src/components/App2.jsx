import React, { Component } from 'react';
import { Section } from './Section/Sections';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Nofication/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const goodFeedback = Number(this.state.good);
    const percentageResult = (goodFeedback / this.countTotalFeedback()) * 100;
    return Number(percentageResult.toFixed(0));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbacksTotal = this.countTotalFeedback();
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please, leave your feedback">
          <FeedbackOptions options={options} onClick={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {isNaN(this.countPositiveFeedbackPercentage()) ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedbacksTotal}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
