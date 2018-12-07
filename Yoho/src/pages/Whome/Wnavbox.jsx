import React from "react";
import "./Wnavbox.css";

class Wnavbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        navlist: [
            {
                imgUrl: "http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/010a6210ab22aea2ab304727a02a0b86c1.png?imageView2/2/w/98/h/98/q/60", title: "新品到著"
            },
            {
                imgUrl: "http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01c07611bfd87c167b614e76fd4e648d1a.png?imageView2/2/w/98/h/98/q/60", title: "品牌一览"
            },
            {
                imgUrl: "http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/0136b1097e58f1da29b8aa5e11014530d6.png?imageView2/2/w/98/h/98/q/60", title: "玩具娱乐"
            },
            {
                imgUrl: "http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01a59222ccd78f99235ceb010e473c40e5.png?imageView2/2/w/98/h/98/q/60", title: "全部分类"
            },
            {
                imgUrl: "http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/017a3e5b1c186344dafa450ca016316be0.png?imageView2/2/w/98/h/98/q/60", title: "中小儿童"
            },
            {
                imgUrl: "http://img10.static.yhbimg.com/yhb-img01/2017/03/01/12/0185ee3b9ba7a02d99a9e82834448ba677.png?imageView2/2/w/98/h/98/q/60", title: "领劵中心"
            },
            {
                imgUrl: "http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/0137b842d791e17b2f432ec6566afe109f.png?imageView2/2/w/98/h/98/q/60", title: "扮酷必备"
            },
            {
                imgUrl: "http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01d3b9f604a085e0c9c9c16a76bc1f882f.png?imageView2/2/w/98/h/98/q/60", title: "折扣专区"
            }
        ]
    };
  }

    render() {
        return <div className="navbox">
            <ul className="nav">
              {(() => {
                return this.state.navlist.map((item, index) => {
                  return <li key={index}>
                      <img src={item.imgUrl} alt="" />
                      <span>{item.title}</span>
                    </li>;
                });
              })()}
            </ul>
          </div>;
    }
}

export default Wnavbox;
