import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import ControlArea from "./../ControlArea/Index.js";
import { Layout } from "antd";
import AppSession from "../../utils/appSession.js";
import TopHeader from "../Header/TopHeader.js";
import UsersInformation from "../UserInformation/UsersInformation.js";

const appSession = new AppSession();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageReload: false
    };
  }

  reloadAppPage = () => {
    console.log("state one:");
    const { pageReload: reloadThisPage } = this.state;
    this.setState({
      pageReload: !reloadThisPage
    });
  };

  handleLogout = () => {
    appSession.removeSession();
    this.reloadAppPage();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>Genealogical Tree</title>
            <meta name="description" content="Genealogical Tree Page" />
          </Helmet>
          <ControlArea reloadAppPage={this.reloadAppPage} {...this.props}>
            <Layout className="layout-box">
              <TopHeader handleLogout={this.handleLogout} />
              <Layout className="layout-box layout-content-box">
                <UsersInformation />
              </Layout>
            </Layout>
          </ControlArea>
        </div>
      </Router>
    );
  }
}
