import React from "react";
import Wheader from "./Wheader.jsx";
import "./Wsort.css";

class Wsort extends React.Component {
  render() {
    return (
      <div className="sort">
        <Wheader />
        <h2>分类</h2>
      </div>
    );
  }
}

export default Wsort;
