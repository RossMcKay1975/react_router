import React, { Component, Fragment } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Contact from "./Contact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ErrorPage from "./ErrorPage";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        { level: "Hobby", cost: 0 },
        { level: "Startup", cost: 10 },
        { level: "Enterprise", cost: 100 }
      ]
    }
  }


  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/pricing"
              render={() => <Pricing prices={this.state.pricing} />} />
            <Route path="/contact" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }


}




export default Main;
