import React from "react";
import { Card, Header, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

class Departments extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments").then(res => {
      this.setState({ departments: res.data });
    });
  }

  deleteDepartment = id => {
    axios.delete(`/api/departments/${id}`).then(res => {
      const { departments } = this.state;
      this.setState({ department: departments.filter(d => d.id !== id) });
    });
  };

  renderDepartments = () => {
    const { departments } = this.state;

    if (departments.length <= 0) return <h2>No Departments</h2>;
    return departments.map(department => (
      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
          <Card.Meta>{department.description}</Card.Meta>
          <Card.Description>{department.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`} color='blue'>
            View
          </Button>
          <Button
            icon
            color='red'
            size='tiny'
            onClick={() => this.deleteDepartment.id}
            style={{ marginLeft: "15px" }}
          >
            <Icon name='trash' />
          </Button>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    return (
      <div>
        <Header as='h1'>Departments</Header>
        <br />
        <Button as={Link} color='blue' to='/departments/new'>
          Add Department
        </Button>

        <br />
        <br />
        <Card.Group>{this.renderDepartments()}</Card.Group>
      </div>
    );
  }
}

export default Departments;
