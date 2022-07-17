const TextInput = ({ name, title, type, register }) => {
  return (
    <div className="answerInput">
      <label htmlFor={name}>{title}</label>
      <input name={name} id={name} type={type || "text"} {...register} />
    </div>
  );
};

export default TextInput;
