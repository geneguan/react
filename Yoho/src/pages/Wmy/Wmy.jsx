import React from "react";
import Wheader from "./Wheader.jsx";
import "./Wmy.css";

class Wmy extends React.Component {
  render() {
    return (
      <div className="my">
        <Wheader />
        <h2>我的</h2>
      </div>
    );
  }
}

export default Wmy;
