const Error = ({ message }) => {
  return (
    <div
      id="fielderror"
      className="show-error error-visible"
      role="alert"
      style={{ marginBottom: "1rem" }}
    >
      {message}
    </div>
  );
};

export default Error;
