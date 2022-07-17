import "../styles/selectInput.css";

const SelectInput = ({ label, name, options, register }) => {
  return (
    <div className="selectInput">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...register}>
        <option disabled selected value>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
