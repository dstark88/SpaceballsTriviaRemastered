import quizCompleteImg from '../assets/schwartz.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number user-answer skipped">{skippedAnswersShare}%</span>
          <span className="text user-answer skipped">skipped</span>
        </p>
        <p>
          <span className="number user-answer correct">{correctAnswersShare}%</span>
          <span className="text user-answer correct">answered correctly</span>
        </p>
        <p>
          <span className="number user-answer wrong">{wrongAnswersShare}%</span>
          <span className="text user-answer wrong">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className="user-answer correct">Correct Answer: {QUESTIONS[index].answers[0]}</p>
              <p className={cssClass}>User Answer: {answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
