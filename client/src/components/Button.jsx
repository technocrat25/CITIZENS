/* eslint-disable jsx-a11y/anchor-is-valid */

import "../styles/button.css";
import { useMediaQuery } from "react-responsive";

const Button = ({ onClick }) => {
  const isPhone = useMediaQuery({
    query: "(max-width: 460px)",
  });
  return (
    <div className="button-container">
      <button
        className="button"
        onClick={onClick}
        style={{ width: isPhone ? "100%" : "15%" }}
      >
        Continue
      </button>
      <div className="link">
        <a href="#">Privacy</a>
        <span></span>
        <a href="#">Security</a>
      </div>
    </div>
  );
};

export default Button;
