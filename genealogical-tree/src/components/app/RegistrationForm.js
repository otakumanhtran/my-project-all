import React, { Component } from "react";
import { Form, Input, Icon, Checkbox, Button } from "antd";
import { withRouter } from "react-router-dom";
import "./RegistrationForm.css";
import PropTypes from "prop-types";
import $ from "jquery";
import Appsession from "../../utils/appSession.js";

const rootUrl = "https://localhost:44341/";
const appSession = new Appsession();

class RegistrationForm extends Component {
  // #region START Function
  userNameFn = element =>
    this.props.form.getFieldDecorator("userName", {
      rules: [{ required: true, message: "Please input your username!" }]
    })(element);
  passwordFn = element =>
    this.props.form.getFieldDecorator("password", {
      rules: [{ required: true, message: "Please input your Password!" }]
    })(element);

  rememberFn = element =>
    this.props.form.getFieldDecorator("remember", {
      valuePropName: "checked",
      initialValue: true
    })(element);
  // #endregion END Function

  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.actionLogin(values);
      }
    });
  };

  actionLogin = value => {
    $.ajax({
      url: rootUrl + "api/Users/Login",
      method: "POST",
      data: {
        user: {
          UserName: value.userName,
          Password: value.password
        }
      },
      dataType: "json",
      cache: false,
      success: function(data) {
        console.log("data =====>", data);
        const storeData = {
          userId: data.userId,
          userRole: data.userRole,
          token: "manhtd_token",
          userUpdateAt: new Date()
        };
        appSession.storeSession(storeData);
        this.redirectAfterLogin();
      }.bind(this),
      error: function(xhr, status, err) {
        debugger;
        this.setState({ isLoaded: true, error: err });
      }.bind(this)
    });
  };

  redirectAfterLogin = () => {
    const currentPath = window.location.pathname;
    // only redirect to top when login page or notthing
    if (currentPath === "" || currentPath === "/" || currentPath === "/login") {
      this.props.history.push("/");
    }
    this.props.reloadAppPage();
  };

  render() {
    return (
      <div className="login-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {this.userNameFn(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                autoFocus
              />
            )}
          </Form.Item>
          <Form.Item>
            {this.passwordFn(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {this.rememberFn(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="#2">
              Forgot password
            </a>
            <Button
              icon="login"
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="#1">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object,
  reloadAppPage: PropTypes.func
};

export default withRouter(Form.create()(RegistrationForm));
