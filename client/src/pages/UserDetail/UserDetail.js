import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {Userform, Userformbody} from "../../components/userForm";
import { Link } from "react-router-dom";
import "./userdetail.css"


class UserDetail extends Component {
  state = {
    user: [],
    userImage: "",
    name: "",
    email: "",
    resume: "",
    bio: ""
  };

  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


//--------------------------------------------
// updateUser: function(req, res) {
//   User
//     .findOneAndUpdate({ _id: req.params._id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
//--------------------------------------------


  handleFormSubmit = event => {
    event.preventDefault();
      API.updateUser({
        userImage: this.state.userImage,
        name: this.state.name,
        email: this.state.email,
        resume: this.state.resume,
        bio: this.state.bio
      })
        .then(res => res.loadUsers())
        .catch(err => console.log(err));
  };

  render() {
    return (
      <Userform>
      <Link to="/">
        <button> Home Page </button>
      </Link>
      <div className="lastCard">
          <Userform>
              <Userformbody>
                <img className="student-img" src={this.state.user.userImage} alt={this.state.user.name}/>
                <h2>{this.state.user.name}</h2>
                <p>{this.state.user.email}</p>
                <p><a href={this.state.user.resume}>{this.state.user.resume}</a></p>
                <p>{this.state.user.bio}</p>
              </Userformbody>
          </Userform>
      </div>


          <h2>EDIT</h2>
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
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
              <div>  </div>
            </form>
          </div>
      </Userform>
    );
  }
}

export default UserDetail;
