import React from "react";
import { Link } from "react-router-dom";

class BackButton extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="back-button">
          <p>GO BACK</p>
        </div>
      </Link>
    );
  }
}
export default BackButton;
