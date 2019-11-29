import React, { Component } from "react";
import { Modal, Form, Input, Icon, Row, Col } from "antd";
import PropTypes from "prop-types";

class ModalOfUser extends Component {
  state = {
    visible: false,
    confirmLoading: false
  };

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

  //#region START: Form function.
  fullNameFn = element => this.props.form.getFieldDecorator("fullName", {rules:[{required: true, message: "Please input your fullname"}]})(element);
  //#endregion END: Form function.
  render() {
    return (
      <div>
        <Modal
          width="40%"
          className="modal-box"
          title={<h2 style={{ color: "#5488c7" }}>User Information</h2>}
          headStyle={{backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0 }}
          visible={this.state.visible}
          onOk={this.handleOk}
          okText="Update information"
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
            <Form.Item label="Full name">
              {this.fullNameFn(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

Modal.propTypes = {
  form: PropTypes.func.isRequired
};

export default ModalOfUser;
