import React, { Component } from "react";
// import Wheader from "./components/Wheader.jsx";
// import Whome from "./pages/Whome/Whome.jsx";
import Wfooter from "./components/Wfooter.jsx";
import Router from "./router/router.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router />
                <Wfooter />
            </div>
        );
    }
}

export default App;
