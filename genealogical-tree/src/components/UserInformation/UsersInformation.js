import React, { Component } from "react";
import "./UsersInformation.css";
import { List, Avatar, Button, Modal, Input } from "antd";
import avatarUser from "./../../assets/images/user4.png";
import avatarUserDisplay from "../../assets/images/user5.jpg";

const { Search } = Input;

const listData = [];

class UsersInformation extends Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false
  };

  UNSAFE_componentWillMount() {
    for (let i = 0; i < 15; i++) {
      listData.push({
        title: `Trần Đức Mạnh ${i}`,
        avatar: { avatarUser },
        description: "Đã có một vợ, một con trai. :D",
        content: (
          <div>
            <p>
              <strong>Workplacea: </strong>Đang làm việc tại Ntq-solution, Khu
              đô thị Sông Đà.
            </p>
            <p>
              <strong>Adress: </strong>Ngõ 142-Cổ Nhuế 2-Bắc Từ Liêm-Hà Nội
            </p>
            <div>
              <Button
                className="custum-displayInfo-button"
                icon="read"
                style={{ marginRight: "20px", backgroundColor: "#" }}
                onClick={() => this.showModelInfo()}
              >
                <b> User information</b>
              </Button>
              <Button
                className="custum-displayInfo-button"
                icon="apartment"
                onClick={() => this.showModelInfo()}
              >
                <b> Genealogical tree </b>
              </Button>
            </div>
          </div>
        )
      });
    }
  }

  //#region START: Modal function.

  showModelInfo = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };
  //#endregion END: Modal function.

  render() {
    return (
      <div className="container">
        <div className="search-box">
          <Search
            className="search-input"
            placeholder="Search by name"
            size="large"
            onSearch={value => console.log(value)}
          />
        </div>
        <hr />
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3
          }}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              className="list-item-user-box"
              key={item.title}
              extra={
                <img
                  className="user-image"
                  alt="logo"
                  src={avatarUserDisplay}
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={avatarUser} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
        <div>
          <Modal
            width="40%"
            className="modal-box"
            headStyle={{backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0 }}
            title={<h2 style={{color:"#5488c7"}}>User Information</h2>}
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
          >

          </Modal>
        </div>
      </div>
    );
  }
}

export default UsersInformation;
