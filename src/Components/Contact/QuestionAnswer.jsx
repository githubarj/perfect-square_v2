import "./contact.css";
import PropTypes from "prop-types";

function QuestionAnswer(props) {
  return (
    <div className="qa-container">
      <p className="question">{props.question}</p>
      <hr className="qa-divider" />
      <p className="answer">{props.answer}</p>
    </div>
  );
}
QuestionAnswer.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default QuestionAnswer;
