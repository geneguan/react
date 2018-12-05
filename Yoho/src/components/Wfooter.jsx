import React from "react";
import "./Wfooter.css"

class Wfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        { name: "首 页", icon: "fa fa-home" },
        { name: "分 类", icon: "fa fa-th-large" },
        { name: "逛 ", icon: "fa fa-rocket" },
        { name: "购物车", icon: "fa fa-shopping-cart" },
        { name: "我 的", icon: "fa fa-user" }
      ]
    };
  }

  componentWillReceivePorps() {
     
  }

  render() {
    return (
      <div className="footer">
        <div className="nav">
          <ul className="ful">
            {(() => {
              return this.state.imgList.map((item, index) => {
                return (
                  <li key={index} className="items" >
                    <i className={item.icon} aria-hidden="true" />
                    <span>{item.name}</span>
                  </li>
                );
              });
            })()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Wfooter