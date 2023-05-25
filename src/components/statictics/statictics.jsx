import PropTypes from 'prop-types';

import css from './statictics.module.css';

const Statictics = ({
  good,
  neutral,
  bad,
  sum,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.feedback__list}>
      <li className={css.feedback__item}>good: {good}</li>
      <li className={css.feedback__item}>neutral: {neutral}</li>
      <li className={css.feedback__item}>bad: {bad}</li>
      <li className={css.feedback__item}>total: {sum}</li>
      <li className={css.feedback__item}>
        positive: {countPositiveFeedbackPercentage}%
      </li>
    </ul>
  );
};

Statictics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.number,
  sum: PropTypes.number,
};

export default Statictics;
