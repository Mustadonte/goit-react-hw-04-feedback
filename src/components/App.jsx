import React, { useReducer } from 'react';
import { Section } from './Section/Sections';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Nofication/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const initialRating = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  function ratingReducer(rating, { type, payload }) {
    switch (type) {
      case 'good':
        return { ...rating, good: rating.good + payload };
      case 'neutral':
        return { ...rating, neutral: rating.neutral + payload };
      case 'bad':
        return { ...rating, bad: rating.bad + payload };
      default:
        throw new Error('Unsupported type of data');
    }
  }

  const [rating, dispatch] = useReducer(ratingReducer, initialRating);

  const onLeaveFeedback = event => {
    dispatch({ type: event.target.name, payload: 1 });
  };

  const countTotalFeedback = () => {
    const totalFeedbacks = Object.values(rating).reduce((acc, value) => {
      return acc + value;
    }, 0);

    return totalFeedbacks;
  };

  const countPositiveFeedbackPercentage = () => {
    const partGoodFeedbacks = (rating.good / countTotalFeedback()) * 100;

    return Number(partGoodFeedbacks.toFixed(0));
  };

  const { good, neutral, bad } = rating;
  const feedbacksTotal = countTotalFeedback();

  return (
    <>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={Object.keys(initialRating)}
          onClick={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedbacksTotal}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
