import "./submit-link-container.styles.scss";

import { Link } from "react-router-dom";

const SubmitLinkContainer = ({ symbol, text }) => {
  return (
    <div className="submit-link-container">
      <Link to="/newlink" className="submit-link-btn">
        {symbol}
      </Link>
      <span className="submit-text">{text}</span>
    </div>
  );
};

export default SubmitLinkContainer;
