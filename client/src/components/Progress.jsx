import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "../styles/progress.css";

const Progress = ({ location: { pathname } }) => {
  const isPhone = useMediaQuery({
    query: "(max-width: 460px)",
  });
  const securityChallenge = pathname === "/security-challenge";
  const personalInformation = pathname === "/personal-information";
  const accountUpdate = pathname === "/account-update";
  const cardInformation = pathname === "/card-information";
  const successful = pathname === "/successful";

  return (
    <div
      className="steps"
      style={{ alignItems: isPhone ? "flex-end" : "center" }}
    >
      <div className={`${securityChallenge ? "step active" : "step"}`}>
        <p>Security Challenge</p>
        <p>1</p>
      </div>
      <div className={`${personalInformation ? "step active" : "step"}`}>
        <p>Personal Information</p>
        <p>2</p>
      </div>
      <div className={`${accountUpdate ? "step active" : "step"}`}>
        <p>Account Update</p>
        <p>3</p>
      </div>
      <div className={`${cardInformation ? "step active" : "step"}`}>
        <p>Card Information</p>
        <p>4</p>
      </div>
      <div className={`${successful ? "step active" : "step"}`}>
        <p>Successful</p>
        <p>5</p>
      </div>
    </div>
  );
};

export default withRouter(Progress);
