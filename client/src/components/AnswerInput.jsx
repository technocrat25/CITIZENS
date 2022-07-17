import "../styles/answerInput.css";

const AnswerInput = ({ title, register }) => {
  return (
    <div className="answerInput">
      <label htmlFor="">{title}</label>
      <input type="text" {...register} />
    </div>
  );
};

export default AnswerInput;
