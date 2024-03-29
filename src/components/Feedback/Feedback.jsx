import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad }) => {
  return (
    <div>
      <ul>
        <li className={css.feedbackItem}>Good: {good}</li>
        <li className={css.feedbackItem}>Neutral: {neutral}</li>
        <li className={css.feedbackItem}>Bad: {bad}</li>
        {/* <li className={css.feedbackItem}>Total: {totalFeedback}</li>
        <li className={css.feedbackItem}>Positive: {positiveRatio}%</li> */}
      </ul>
    </div>
  );
};

export default Feedback;