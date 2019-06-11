import React from "react";
import { Card, Header } from "semantic-ui-react";
import axios from "axios";

// const Departments = () => <h1>Departments</h1>;

class Departments extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments").then(res => {
      this.setState({ departments: res.data });
    });
  }

  renderDepartments = () => {
    const { departments } = this.state;

    if (departments.length <= 0) return <h2>No Departments</h2>;
    return departments.map(department => (
      <Card>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
          <Card.Meta>{department.description}</Card.Meta>
          <Card.Description>{department.description}</Card.Description>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    return (
      <div>
        <Header as='h1'>Departments</Header>
        <br />
        <Card.Group>{this.renderDepartments()}</Card.Group>
      </div>
    );
  }
}

export default Departments;
