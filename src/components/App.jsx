import css from './feedback.module.css';
import { useEffect, useState } from 'react';

import FeedbackBtn from './buttons/buttons';
import Statictics from './statictics/statictics';
import Notification from './notification/notification';
import Section from './section/section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [sum, setSum] = useState(0);
  const [positivePersentage, setPositivePersentage] = useState(0);

  useEffect(() => {
    setSum(good + neutral + bad);
    setPositivePersentage(Math.round(good / (sum / 100)));
  }, [bad, good, neutral, sum]);

  const handleClickButton = value => {
    if (value === 'good') {
      return setGood(state => state + 1);
    }
    if (value === 'neutral') {
      return setNeutral(state => state + 1);
    }
    if (value === 'bad') {
      return setBad(state => state + 1);
    }
  };

  const clickButton = event => {
    event.preventDefault();
    const { innerText } = event.target;

    handleClickButton(innerText);
  };

  return (
    <div className={css.feedback__container}>
      <Section title="Please leave feedback">
        <FeedbackBtn
          options={Object.keys({ good, neutral, bad })}
          clickButton={clickButton}
        />
      </Section>
      <Section title="Statictics">
        {sum > 0 ? (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            sum={sum}
            countPositiveFeedbackPercentage={positivePersentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

export default App;
