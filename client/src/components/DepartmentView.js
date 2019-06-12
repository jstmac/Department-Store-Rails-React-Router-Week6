import React from "react";
import axios from "axios";
import { Button, Header, Segment } from "semantic-ui-react";
import DepartmentsForm from "./DepartmentsForm";

class DepartmentView extends React.Component {
  state = { department: {}, showForm: false };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/departments/${id}`).then(res => {
      this.setState({ department: res.data });
    });
  }

  updateState = (name, description) => {
    this.setState({
      department: {
        ...this.state.department,
        name: name,
        description: description
      }
    });
  };

  toggleShowForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm };
    });
  };

  render() {
    const {
      department: { name, description }
    } = this.state;

    return (
      <div>
        <Button color='black' onClick={this.props.history.goBack}>
          Back
        </Button>
        <Button onClick={this.toggleShowForm} color='blue'>
          Edit
        </Button>
        {this.state.showForm ? (
          <DepartmentsForm
            toggleShowForm={this.toggleShowForm}
            department={this.state.department}
            updateState={this.updateState}
          />
        ) : (
          <Segment>
            <Header as='h1'>{name}</Header>
            <Header as='h3'>{description}</Header>
          </Segment>
        )}
      </div>
    );
  }
}

export default DepartmentView;
