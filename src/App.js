import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/home'
import Portfolio from './Components/portfolio'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            < Route exact path="/" component={Home} />
            < Route exact path="/home" component={Home} />
            < Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  };
}
export default App;
