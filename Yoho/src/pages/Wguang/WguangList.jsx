import React from "react";
import "./WguangList.css";

class WguangList extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            data: []
        }
    }

    componentWillReceiveProps() {
        // console.log(this.props.show);
    }

    getData() {
        React.axios.get('./data/goodslist.json')
            .then((response) => {
                // console.log(response);
                console.log(response.data);
                this.setState({
                    data: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    backTop() {
        console.log(window.scrollY = 100);
        // window.scrollTo(0, 0)
    }


    componentDidMount() {
        this.getData();
        this.backTop();
    }

    render() {
        // console.log(this.state.data)
        return (
            <div className="guangList">
                <div className="backtop">
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
                <ul className="showBox">
                    {(() => {
                        return this.state.data.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="img">
                                        <img src={item.image_url} alt={item.title} width="154px" height="199px" />
                                    </div>
                                    <p className="title">{item.title}</p>
                                    <p className="price">{item.RMB_price}</p>
                                </li>
                            )
                        })
                        
                    })()
                    }
                    
                </ul>
            </div>
        );
    }

}

export default WguangList;