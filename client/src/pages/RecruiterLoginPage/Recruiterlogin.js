import React, { Component } from "react";
// import API from "../../utils/API";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import {Userform, Userformbody} from "../../components/userForm";
import { Link } from "react-router-dom";
import "./login.css"


class Recruiterlogin extends Component {

  render() {
    return (
      <div className="loginPage">
        <span className="loginSpan">
          <input type="text" className="loginInput" placeholder="E-Mail" />
          <input type="text" className="loginInput" placeholder="Password" />
          <Link to="/recruiters">
          <button className="btn_at">Login</button>
          </Link>
        </span>
      </div>
    )
  }
}

export default Recruiterlogin;
