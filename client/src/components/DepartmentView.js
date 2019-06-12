import React from "react";
import axios from "axios";
import { Button, Header, Segment } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { Department: {} };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`).then(res => {
      this.state({ product: res.data });
    });
  }

  render() {
    const { name, description } = this.state.Department;

    return (
      <div>
        <Segment>
          <Header as='h1'>{name}</Header>
          <Header as='h3'>{description}</Header>
        </Segment>
        <br />
        <br />
        <Button color='black' onClick={this.props.history.goBack}>
          Back
        </Button>
      </div>
    );
  }
}

export default DepartmentView;
