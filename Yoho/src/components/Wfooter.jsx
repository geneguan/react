import React from "react";
import "./Wfooter.css"
// import Router from "../router/router.js";

class Wfooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        navList: [
            { name: "首 页", path: "#/home", icon: "fa fa-home" },
            { name: "分 类",  path: "#/sort", icon: "fa fa-th-large" },
            { name: "逛 ",  path: "#/guang", icon: "fa fa-rocket" },
            { name: "购物车",  path: "#/cart", icon: "fa fa-shopping-cart" },
            { name: "我 的",  path: "#/my", icon: "fa fa-user" }
        ],
        nav: ''
        };
    }

    componentDidMount() {
    }

    toggle(index, e) {
        this.setState({
            nav: index
        })
    }

    render() {
        return (
        <div className="footer">
            <div className="nav">
            <ul className="ful">
                {(() => {
                return this.state.navList.map((item, index) => {
                    return <a href={item.path} key={index} className={index === this.state.nav ? 'act' : ''} onClick={this.toggle.bind(this, index)}>
                        <li className="items">
                        <i className={item.icon} aria-hidden="true" />
                        <span>{item.name}</span>
                        </li>
                    </a>;
                });
                })()}
            </ul>
            </div>
        </div>
        );
    }
}

export default Wfooter;