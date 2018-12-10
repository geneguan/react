import React from "react";
import "./Wheader.css";
import "../../styles/css/font-awesome.css";

class Wheader extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      logoImg: require("../../imgs/yohologo01.png")
    };
  }

  render() {
    return (
      <div className="guangHeader">
        <div className="back">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </div>
        <div className="logo">
          <img src={this.state.logoImg} height="38" width="127" alt="" />
        </div>
        <div className="bars">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Wheader;
