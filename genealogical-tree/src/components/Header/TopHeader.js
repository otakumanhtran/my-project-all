import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import "../Header/TopHeader.css";
import logoTopHeader from "./../../assets/images/logo-top-header.jfif";
import PropTypes from "prop-types";

const { Header } = Layout;

class TopHeader extends Component {
  render() {
    return (
      <Header id="TOP-HEADER">
        <div className="logo-top-header">
          <img
          className="image-logo-top-header"
            src={logoTopHeader}
            alt="logo top-header"
          />
        </div>
        <div className="separate-menu"></div>
        <Menu
          className="menu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item className="menu-item" key="1"><Icon type="home" />Home</Menu.Item>
          <Menu.Item className="menu-item" key="2"><Icon type="contacts" />Contact</Menu.Item>
          <Menu.Item className="menu-item" key="3"><Icon type="sync" spin />Help</Menu.Item>
          <Menu.Item className="menu-item-right" key="5" onClick={this.props.handleLogout}><Icon type="logout" /> Logout</Menu.Item>
          <Menu.Item className="menu-item-right" key="4"><Icon type="user" />Trần Đức Mạnh</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

TopHeader.propTypes = {
  handleLogout: PropTypes.func.isRequired,
}

export default TopHeader;
