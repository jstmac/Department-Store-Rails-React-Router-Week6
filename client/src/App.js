import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Item from "./components/Item";
import NoMatch from "./components/NoMatch";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/item' component={Item} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
