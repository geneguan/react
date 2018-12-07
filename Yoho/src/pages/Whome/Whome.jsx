import React from "react";
import Wheader from "./Wheader.jsx";
import Wbanner from "../../components/Wbanner.jsx";
import Wnavbox from "./Wnavbox.jsx";
import Whotlist from "./Whotlist.jsx";
import "./Whome.css";

class Whome extends React.Component {

  render() {
    return <div className="home">
            <Wheader />
            <Wbanner />
            <Wnavbox />
            <Whotlist />
        </div>;
    }

}

export default Whome;