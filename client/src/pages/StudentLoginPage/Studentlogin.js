import React, { Component } from "react";
// import API from "../../utils/API";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import {Userform, Userformbody} from "../../components/userForm";
import { Link } from "react-router-dom";
import "./login.css"


class Studentlogin extends Component {

  render() {
    return (
      <div className="loginPage">
        <span className="loginSpan">
        <input type="text" className="loginInput" placeholder="E-Mail" />
        <input type="text" className="loginInput" placeholder="Password" />

        <Link to="/users/id">
        <button className="btn_at">Login</button>
        </Link>
        <Link to="/users">
        <button className="btn_at">Register</button>
        </Link>
        </span>
      </div>
    )
  }
}

export default Studentlogin;
