import React from "react";
import "./Wbanner.css";
import Swiper from "../../node_modules/swiper/dist/js/swiper.js";
import "../../node_modules/swiper/dist/css/swiper.min.css";

class Wbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLists: [
                {
                    imageUrl: "https://img11.static.yhbimg.com/yhb-img01/2018/11/21/13/0197b867e9d708c890c98e4c7df23b2163.jpg?imageView2/2/w/640/h/240/q/60"
                },
                {
                    imageUrl: "http://img11.static.yhbimg.com/yhb-img01/2018/11/14/17/0180d69547ef83d1439702adedc92a751f.jpg?imageView2/2/w/640/h/240/q/60"
                },
                {
                    imageUrl: "http://img10.static.yhbimg.com/yhb-img01/2018/11/14/17/01ab5346eb1fd1e93e636ae33831ed9f2c.jpg?imageView2/2/w/640/h/240/q/60"
                },
                {
                    imageUrl: "http://img10.static.yhbimg.com/yhb-img01/2018/11/14/17/01ebae8646366c7a16b780cd63504e4e80.jpg?imageView2/2/w/640/h/240/q/60"
                }
            ]
        };
    }

    componentDidMount() {
        new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {  // 自动播放 
                delay: 2000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination'
            }
        }) 
    }

    render() {
        return <div className="banner">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {(() => {
                        return this.state.imgLists.map((item, index) => {
                            return (
                                <div className="swiper-slide" key={index}>
                                    <img className="bannerImg" src={item.imageUrl} alt="" width="375" height="183" />
                                </div>
                            );
                        });
                    })()}
                
                </div>
                <div className="swiper-pagination" />
                </div>
            </div>;
        }
    }

export default Wbanner;