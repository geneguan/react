import React from "react";
import "./Wslider.css";

class Wslider extends React.Component {

    constructor(props) {

        super(props);
        this.props = props;
        this.state = {
            navList: [
                { name: '男生', yw: 'BOYS', path: '/boys' },
                { name: '女生', yw: 'GIRLS', path: '/girls' },
                { name: '童装', yw: 'KIDS', path: '/kids' },
                { name: '创意生活', yw: 'LIFE STYLE', path: '/lifeStyle' },
                { name: '逛', yw: 'TRENDFINDER', path: '/goodslist' }
            ],
            displays: 'none'
        };

    }

    componentDidMount() {
        
    }

    componentWillReceiveProps() {
        // console.log(this.props.show);
        if(this.props.show === true) {
            this.setState({
                displays: 'block'
            });
        }else {
            this.setState({ 
                displays: "none" 
            });
        }
    }

    render() {
        return (
            <div className="slider" style={{display: this.state.displays}}>
                <ul className = "sliderList">
                    {(() => {
                        return this.state.navList.map((item, index) => {
                            return (
                                <li key={index}>
                                    { item.name }
                                    <span>{ item.yw }</span>
                                </li>
                            );
                    });
                        
                })()}
                    
                </ul>
            </div>
        );
    }

}

export default Wslider;