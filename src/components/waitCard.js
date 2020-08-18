import React from "react";
import "../css/MovieCard.css";

class WaitCard extends React.Component {
  render() {
    return (
      <div className="card">
        <p>Loading.....</p>
      </div>
    );
  }
}

export default WaitCard;