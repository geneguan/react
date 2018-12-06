import React from "react";
import Wbanner from "../../components/Wbanner.jsx";
import Wnavbox from "./Wnavbox/Wnavbox.jsx";
import "./Whome.css";

class Whome extends React.Component {

  render() {
    return (
        <div className="home">
            <Wbanner />
            <Wnavbox />
        </div>
        );
    }

}

export default Whome;