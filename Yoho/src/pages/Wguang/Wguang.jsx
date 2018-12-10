import React from "react";
import Wheader from "./Wheader.jsx";
import "./Wguang.css";
import WguangList from "./WguangList.jsx";

class Wguang extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      tablist: [
        { title: "最新", path: "newest" },
        { title: "搭配", path: "collocation" },
        { title: "头条", path: "headlines" },
        { title: "上新", path: "update" },
        { title: "视频", path: "video" }
      ],
      selInit: "newest"
    };
  }

  toggle(val) {
    this.setState({
      selInit: val
    });
  }

  render() {
    return (
      <div className="guang">
        <Wheader />
        <div className="nav">
          <ul className = "tabs">
            {(() => {
              return this.state.tablist.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={this.state.selInit === item.path ? "actg" : ""} 
                    onClick = {this.toggle.bind(this, item.path)}
                  >
                    {item.title}
                  </li>
                );
              });
            })()}
          </ul>
        </div>
        <WguangList show = {this.state.selInit}/>
      </div>
    );
  }
}

export default Wguang;