import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class Recruiters extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    bio: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, name: "", email: "", bio: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      // <Jumbotron>
      //   <p>{this.state.users}</p>
      //   <h1>cookie</h1>
      // </Jumbotron>

      <Col size="md-12 sm-12">
        <Jumbotron>
          <h1>Users On My List</h1>
        </Jumbotron>
        {this.state.users.length ? (
          <List>
            {this.state.users.map(user => (
              <ListItem key={user._id}>
                {user.name}
                {user.email}
                {user.bio}
                <DeleteBtn onClick={() => this.deleteUser(user._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
    );
  }
}

export default Recruiters;
