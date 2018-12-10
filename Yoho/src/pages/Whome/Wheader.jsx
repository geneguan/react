import React from "react";
import Wslider from "../../components/Wslider.jsx";
import "./Wheader.css";
import "../../styles/css/font-awesome.css";

class Wheader extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { 
        showCon: true,
        shows: 'none',
        num: 1,
        logoImg: require("../../imgs/yohologo01.png") 
    };
  }

  //   componentWillReceiveProps() {
  //       console.log(this.state);
  //   }

  //   componentDidMount() {
  //     console.log(this.state.showCon);
  //   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 5000);  // 定时器
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);  // 清除定时器
//   }
  
//   tick() {
//     var nums = this.state.num;
//     // console.log(nums);  // 定时切换logo图片
//     if(nums === 1){
//         this.setState({ 
//             logoImg: require("../../imgs/yohologo02.png"),
//             num: 2    
//         });
//     }else{
//         this.setState({ 
//             logoImg: require("../../imgs/yohologo01.png"),
//             num: 1    
//         });
//     }
//   }

  showSlider(e) {
    //   console.log(666)
    this.setState({
      showCon: !this.state.showCon,
      shows: 'block'
    });
    // console.log(this.state.showCon);
  }

  hideSlider(e) {
      console.log(666)
      this.setState({
          showCon: !this.state.showCon,
          shows: 'none'
      });
  }

  render() {
    return (
      <div className="homeHeader">
        <div className="menu" onClick={this.showSlider.bind(this)}>
          <i className="fa fa-list" aria-hidden="true" />
        </div>
        <div className="logo">
          <img
            src={this.state.logoImg}
            height="38"
            width="127"
            alt=""
          />
        </div>
        <div className="search">
          <i className="fa fa-search" aria-hidden="true" />
        </div>
            <Wslider show={this.state.showCon} />
        <div className="mask" onClick={this.hideSlider.bind(this)} style={{display: this.state.shows}} />
      </div>
    );
  }
}

export default Wheader;
