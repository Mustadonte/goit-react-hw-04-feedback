import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <li key="goodStat">Good: {good}</li>
        <li key="neutralStat">Neutral: {neutral}</li>
        <li key="badStat">Bad: {bad}</li>
      </ul>
      <p>Total: {total}</p>
      <p>Positiv Feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
