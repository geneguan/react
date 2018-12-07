import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Whome from '../pages/Whome/Whome.jsx';
import Wguang from "../pages/Wguang/Wguang.jsx";
import Wsort from "../pages/Wsort/Wsort.jsx";
import Wcart from "../pages/Wcart/Wcart.jsx";
import Wmy from '../pages/Wmy/Wmy.jsx';

const BasicRoute = () => (
  <HashRouter>
    <Switch>
    <Route exact path="/" component={Whome} />
    <Route exact path="/home" component={Whome} />
    <Route exact path="/sort" component={Wsort} />
    <Route exact path="/guang" component={Wguang} />
    <Route exact path="/cart" component={Wcart} />
    <Route exact path="/my" component={Wmy} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;