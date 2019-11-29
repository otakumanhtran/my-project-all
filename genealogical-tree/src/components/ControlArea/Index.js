import React, { Component } from "react";
import RegistrationForm from "./../app/RegistrationForm.js";
import AppSession from "./../../utils/appSession.js";
import PropTypes from "prop-types";

const appSession = new AppSession();

class Index extends Component {
  content = this.props.children;

  UNSAFE_componentWillMount() {
    if (!this.checkUserAuthentication()) {
      console.log("UNSAFE_componentWillMount");
      this.content = (
        <RegistrationForm
          reloadAppPage={this.props.reloadAppPage}
        ></RegistrationForm>
      );
    }
  }

  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate");
    console.log("content 1: ", this.content);
    var authen = !this.checkUserAuthentication();
    console.log("authen: ", authen);
    if (!this.checkUserAuthentication()) {
      console.log("content 2: ", this.content);
      this.content = (
        <RegistrationForm
          reloadAppPage={this.props.reloadAppPage}
        ></RegistrationForm>
      );
    } else {
      this.content = this.props.children;
    }
  }

  checkUserAuthentication() {
    return appSession.checkUserLogin();
  }

  handleLogout = () => {
    appSession.removeSession();
    this.props.reloadAppPage();
  };

  render() {
    return <React.Fragment>{this.content}</React.Fragment>;
  }
}

Index.propType = {
  children: PropTypes.element.isRequired,
  reloadAppPage: PropTypes.func
};

export default Index;
