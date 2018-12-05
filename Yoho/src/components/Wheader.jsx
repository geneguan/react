import React from "react";
import "./Wheader.css";
import "../styles/css/font-awesome.css"

class Wheader extends React.Component {

	render() {
		return (
            <div className="header">
                <div className="menu">
                    <i className="fa fa-list" aria-hidden="true" />
                </div>
                <div className="logo">
                    <img src={require("../imgs/logo.png")} height="38" width="127" alt="" />
                </div>
                <div className="search">
                    <i className="fa fa-search" aria-hidden="true" />
                </div>
            </div>
        );
    }

}

export default Wheader;