import "../styles/leftSide.css";
import { useMediaQuery } from "react-responsive";

const LeftSide = ({ children }) => {
  const isPhone = useMediaQuery({
    query: "(max-width: 460px)",
  });
  return (
    <div className="left-side" style={{ width: isPhone ? "100%" : "auto" }}>
      <div
        className="left-side__container"
        style={{ width: isPhone ? "100%" : "70%" }}
      >
        {children}
      </div>
    </div>
  );
};

export default LeftSide;
