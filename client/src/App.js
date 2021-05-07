import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Game from "./components/Game";
import Multiplayer from "./components/Multiplayer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sandbox' exact component={Game} />
        <Route path='/multiplayer' exact component={Multiplayer} />
      </Switch>
    </Router>
  );
}

export default App;
