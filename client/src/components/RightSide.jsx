import "../styles/rightSide.css";
import { useMediaQuery } from "react-responsive";

const RightSide = ({ children }) => {
  const isPhone = useMediaQuery({
    query: "(max-width: 460px)",
  });
  return (
    <div className="right-side" style={{ width: isPhone ? "100%" : "auto" }}>
      <div
        className="right-side__container"
        style={{ width: isPhone ? "100%" : "70%" }}
      >
        {children}
      </div>
    </div>
  );
};

export default RightSide;
