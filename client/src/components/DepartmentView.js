import React from "react";
import axios from "axios";
import { Button, Header, Segment } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {} };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/departments/${id}`).then(res => {
      this.setState({ department: res.data });
    });
  }

  render() {
    const {
      department: { name, description }
    } = this.state;

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
