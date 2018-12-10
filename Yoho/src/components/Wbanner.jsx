import React from "react";
import "./Wbanner.css";
import Swiper from "../../node_modules/swiper/dist/js/swiper.js";
import "../../node_modules/swiper/dist/css/swiper.min.css";

class Wbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imgLists: [{ imageUrl: "https://img10.static.yhbimg.com/yhb-img01/2018/12/04/17/01a7c0e242004bc7bdeed66d96f9036d53.jpg?imageView2/2/w/640/h/240/q/60" }, { imageUrl: "http://img11.static.yhbimg.com/yhb-img01/2018/12/04/17/010b7f6f30482aa47004e17d8138eb9153.jpg?imageView2/2/w/640/h/240/q/60" }, { imageUrl: "http://img10.static.yhbimg.com/yhb-img01/2018/12/04/17/01e068e63d844a852e7952c27379bad84f.jpg?imageView2/2/w/640/h/240/q/60" }, { imageUrl: "http://img10.static.yhbimg.com/yhb-img01/2018/12/04/17/01fd892bc91c7e65a96a7277acb4d8a213.jpg?imageView2/2/w/640/h/240/q/60" }] };
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
        return (
            <div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {(() => {
                            return this.state.imgLists.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <img className="bannerImg" src={item.imageUrl} alt=""/>
                                    </div>
                                );
                            });
                        })()}
                    
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </div>
        );
    }
}

export default Wbanner;