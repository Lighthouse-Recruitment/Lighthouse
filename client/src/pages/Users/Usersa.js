import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {Userform, Userformbody} from "../../components/userForm";
import "./user.css"


class Users extends Component {
  state = {
    users: [],
    userImage: "",
    name: "",
    email: "",
    resume: "",
    bio: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({
          users: res.data,
          userImage: "",
          password:'',
          name: "",
          email: "",
          resume: "",
          bio: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email) {
      API.saveUser({
        userImage: this.state.userImage,
        name: this.state.name,
        email: this.state.email,
        resume: this.state.resume,
        bio: this.state.bio
      })
        .then(res => this.props.history.push('/users/'+ res.data._id))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Userform>
          <h2>USER INFO</h2>
          <div className="userBlock">
            <form>
              <Input
                value={this.state.userImage}
                onChange={this.handleInputChange}
                name="userImage"
                placeholder="userImage (required)"
              />
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                value={this.state.resume}
                onChange={this.handleInputChange}
                name="resume"
                placeholder="resume (required)"
              />
              <TextArea
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="bio (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
              <div>  </div>
            </form>
          </div>


        <div className="lastCard">
          {this.state.users[this.state.users.length-1] ? (
            <Userform>
                <Userformbody key={this.state.users[this.state.users.length-1]._id}>
                  <img className="student-img" src={this.state.users[this.state.users.length-1].userImage} alt={this.state.users[this.state.users.length-1].name}/>
                  <h2>{this.state.users[this.state.users.length-1].name}</h2>
                  <p>{this.state.users[this.state.users.length-1].email}</p>
                  <p><a href={this.state.users[this.state.users.length-1].resume}>{this.state.users[this.state.users.length-1].resume}</a></p>
                  <p>{this.state.users[this.state.users.length-1].bio}</p>
                </Userformbody>

            </Userform>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </Userform>
    );
  }
}

export default Users;
