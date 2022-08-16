import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div>
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button" name={option} onClick={onClick}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
