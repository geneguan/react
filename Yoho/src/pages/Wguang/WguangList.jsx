import React from "react";
import "./WguangList.css";

class WguangList extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        }
    }

    componentWillReceiveProps() {
        // console.log(this.props.show);
    }

    render() {
        return <div>{this.props.show}</div>
    }

}

export default WguangList;