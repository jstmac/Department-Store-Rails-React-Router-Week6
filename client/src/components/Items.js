import React from "react";
import { Header, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

class Items extends React.Component {
  state = { items: [] };

  componentDidMount() {
    const { department } = this.props;

    axios.get(`/api/departments/${department}/items`).then(res => {
      this.setState({ items: res.data });
    });
  }

  deleteItem = zebra => {
    axios.delete(`/api/departments/${zebra}/items/${zebra}`).then(res => {
      const { items } = this.state;
      this.setState({ item: items.filter(i => i.id !== zebra) });
    });
  };

  renderItems = () => {
    const { items } = this.state;

    if (items.length <= 0) return <h2>No Items</h2>;
    return items.map(item => (
      <li>
        {item.name} {item.price}
        <Button
          icon
          color='red'
          size='tiny'
          onClick={() => this.deleteItem(item.id)}
          style={{ marginLeft: "15px" }}
        >
          <Icon name='trash' />
        </Button>
      </li>
    ));
  };

  render() {
    return (
      <div>
        <Header as='h1'>Items</Header>
        <br />
        <Button as={Link} color='blue' to='/departments/items/new'>
          Add Item
        </Button>
        <ul>{this.renderItems()}</ul>
      </div>
    );
  }
}

export default Items;
