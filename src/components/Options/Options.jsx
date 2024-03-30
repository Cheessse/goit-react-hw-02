import css from "./Options.module.css";

const Options = ({updateFeedback, resetFeedback, totalFeedback}) => {
  return (
    <div className={css.wrapper}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;