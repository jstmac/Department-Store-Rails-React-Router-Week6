import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Departments from "./components/Departments";
import DepartmentsForm from "./components/DepartmentsForm";
import DepartmentView from "./components/DepartmentView";
import Items from "./components/Items";
import GitHubStyled from "./components/GitHubStyled";

// import Items from "./components/Item";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/departments/:id/items' component={Items} />
        <Route exact path='/departments/github' component={GitHubStyled} />
        <Route exact path='/departments/new' component={DepartmentsForm} />
        <Route exact path='/departments/:id' component={DepartmentView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
