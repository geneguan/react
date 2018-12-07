import React from "react";
// import Wclock from "./Wclock.jsx";
import "./Whotlist.css";

class Whotlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}
    
    backTop(item,event) {
        console.log(item)
        window.scrollTo(0,0)
    }

    render() {
        return (
        <div className="hotlist">
            <div className="listBox">
            <h2>热门分类</h2>
            <ul className="hotType">
                <li key="index">
                <img src="item.imageUrl" alt="" />
                </li>
            </ul>
            <ul className="hotType">
                <li key="index">
                <img src="item.imageUrl" alt="" />
                </li>
            </ul>
            <ul className="hotType">
                <li key="index">
                <img src="item.imageUrl" alt="" />
                </li>
            </ul>
            <h2>热门品牌</h2>
            <ul className="hotBrand">
                <li key="index">
                <img src="item.imageUrl" alt="" />
                </li>
            </ul>
            </div>
            <div>
            <img
                src="http://img10.static.yhbimg.com/yhb-img01/2017/11/16/14/01f28721040918d34d66531cb1c4b88efe.jpg?imageView2/3/w/640/h/200/q/60"
                alt=""
                width="375"
                height="118"
            />
            </div>
            <h2>人气单品排行</h2>
            <div>
            <img
                src="http://img10.static.yhbimg.com/yhb-img01/2017/07/17/15/011dd0506f51b4bc88a527aaccef0795e0.jpg?imageView2/2/w/640/h/200/q/90"
                alt=""
                width="375"
                height="118"
            />
            </div>
            <div className="adBox">
            <div className="content">
                <ul className="ad">
                <li>
                    <img
                    src="http://img10.static.yhbimg.com/yhb-img01/2017/07/17/15/011dd0506f51b4bc88a527aaccef0795e0.jpg?imageView2/2/w/640/h/200/q/90"
                    alt=""
                    width="95"
                    height="170"
                    />
                </li>
                <li>
                    <img
                    src="http://img10.static.yhbimg.com/yhb-img01/2017/07/17/15/011dd0506f51b4bc88a527aaccef0795e0.jpg?imageView2/2/w/640/h/200/q/90"
                    alt=""
                    width="95"
                    height="170"
                    />
                </li>
                <li>
                    <img
                    src="http://img10.static.yhbimg.com/yhb-img01/2017/07/17/15/011dd0506f51b4bc88a527aaccef0795e0.jpg?imageView2/2/w/640/h/200/q/90"
                    alt=""
                    width="95"
                    height="170"
                    />
                </li>
                <li>
                    <img
                    src="http://img10.static.yhbimg.com/yhb-img01/2017/07/17/15/011dd0506f51b4bc88a527aaccef0795e0.jpg?imageView2/2/w/640/h/200/q/90"
                    alt=""
                    width="95"
                    height="170"
                    />
                </li>
                <li>
                    <img
                    src="http://img10.static.yhbimg.com/yhb-img01/2017/07/17/15/011dd0506f51b4bc88a527aaccef0795e0.jpg?imageView2/2/w/640/h/200/q/90"
                    alt=""
                    width="95"
                    height="170"
                    />
                </li>
                </ul>
            </div>
            </div>

            <div className="imgs">
            <img
                src="http://img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01d9e2c0e69c1b13eaf979f3940dca42ee.jpg?imageView2/3/w/640/h/200/q/60"
                alt=""
                width="375"
                height="118"
            />
            </div>
            <div className="imgs">
            <img
                src="http://img11.static.yhbimg.com/yhb-img01/2017/08/16/17/018e9f4b45c625e6348512065f327f144f.jpg?imageView2/3/w/640/h/200/q/60"
                alt=""
                width="375"
                height="118"
            />
            </div>
            <div className="imgs">
            <img
                src="http://img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01280cb5522f4eb015ab9a72dc6a899882.jpg?imageView2/3/w/640/h/200/q/60"
                alt=""
                width="375"
                height="118"
            />
            </div>
            <div className="toTop" onClick={this.backTop.bind(this,'返回顶部')}>
                <i className="fa fa-chevron-up" aria-hidden="true" />
                &nbsp;返回顶部&nbsp;
                <i className="fa fa-chevron-up" aria-hidden="true" />
            </div>
            {/* <Wclock /> */}
            <div className="bottomTitle">
                CopyRight©2007-2018 南京新与力文化传播有限公司
            </div>
        </div>
        );
    }
}

export default Whotlist;
