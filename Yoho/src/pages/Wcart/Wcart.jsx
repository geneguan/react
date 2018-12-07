import React from "react";
import "./Wcart.css";

class Wcart extends React.Component {
  render() {
    return (
      <div className="cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <p>您的购物车暂无商品 ~</p>
      </div>
    );
  }
}

export default Wcart;
