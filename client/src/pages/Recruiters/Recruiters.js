import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Users extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    userImage: "",
    resume:"",
    bio:""
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({
          users: res.data,
          name: "",
          email: "",
          userImage: "",
          resume:"",
          bio:""
        })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>User Cards</h1>
            </Jumbotron>
            //--------------------------------------
            <userCard>
              <img src={this.state.userImg}></img>
              <h2>{this.state.name}</h2>
              <p>{this.state.email}</p>
              <p><a href={this.state.resume}>Resume</a></p>
              <p>{this.state.bio}</p>
            </userCard>
            //--------------------------------------
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Users On My List</h1>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                    <Link to={"/users/" + user._id}>
                      <strong>
                        {user.title} by {user.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
