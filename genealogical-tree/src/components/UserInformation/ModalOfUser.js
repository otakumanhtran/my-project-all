import React, { Component } from "react";
import {
  Modal,
  Form,
  Input,
  Icon,
  Row,
  Col,
  Collapse,
  Select,
  Upload,
  message,
  DatePicker
} from "antd";
import moment from "moment";
import PropTypes from "prop-types";
import "./ModalOfUser.css";
import UserImage from "../../assets/images/user5.jpg";

const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 18 },
    sm: { span: 18 }
  }
};
const dateFormat = "DD/MM/YYYY";

const InputGroup = Input.Group;
const { Option } = Select;

const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};

const { Panel } = Collapse;

//#region Avata
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
//#endregion Avata

class ModalOfUser extends Component {
  state = {
    gender: "Male",
    loadingAvata: false,
    imageUrl: UserImage
  };

  handleChangeAvata = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  //#region START: Form function.
  fullNameFn = element =>
    this.props.form.getFieldDecorator("fullName", {
      rules: [{ required: true, message: "Please input your fullname" }]
    })(element);

  handleChangeGender = value => {
    if (value !== this.state.gender) {
      this.setState({ gender: value });
    }
  };
  //#endregion END: Form function.
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    console.log("date: ", new Date(Date.now()).toDateString());

    return (
      <div>
        <Modal
          width="40%"
          className="modal-box"
          title={<h2 style={{ color: "#5488c7" }}>User Information</h2>}
          headStyle={{ backgroundColor: "rgba(255, 255, 255, 0.4)", border: 0 }}
          visible={this.props.visible}
          onOk={this.props.handleOk}
          okText="Update information"
          confirmLoading={this.props.confirmLoading}
          onCancel={this.props.handleCancel}
        >
          <Form className="ant-advanced-search-form scroll-custom">
            <Collapse
              className="wrapper"
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <Icon type="caret-right" rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel
                header={<strong>Profile</strong>}
                key="1"
                style={customPanelStyle}
              >
                <Row>
                  <Col
                    span={16}
                    style={{
                      borderRadius: "0px",
                      borderRight: "1px solid #e8e8e8"
                    }}
                  >
                    <Form.Item
                      {...formItemLayout}
                      label="Name"
                      style={{ width: "95%" }}
                    >
                      <Input
                        placeholder="User name"
                        defaultValue="Trần Đức Mạnh"
                      />
                    </Form.Item>
                    <Form.Item
                      {...formItemLayout}
                      label="Birthday"
                      style={{ width: "95%" }}
                    >
                      <DatePicker
                        style={{ width: "100%" }}
                        defaultValue={moment(
                          new Date("01/02/1993"),
                          dateFormat
                        )}
                        format={dateFormat}
                      />
                    </Form.Item>
                    <Form.Item
                      {...formItemLayout}
                      label="Gender"
                      style={{ width: "95%" }}
                    >
                      <InputGroup compact>
                        <Select
                          defaultValue="Male"
                          onChange={this.handleChangeGender}
                          style={{ width: "30%" }}
                        >
                          <Option value="Male">
                            <Icon type="man" /> Male
                          </Option>
                          <Option value="Female" icon="woman">
                            <Icon type="woman" /> Female
                          </Option>
                        </Select>
                        <Input
                          style={{ width: "70%" }}
                          value={this.state.gender}
                          disabled
                        />
                      </InputGroup>
                    </Form.Item>
                    <Form.Item
                      {...formItemLayout}
                      label="Password"
                      style={{ float: "left", width: "95%" }}
                    >
                      <Input.Password
                        placeholder="Input password"
                        defaultValue="manh123456"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8} style={{ paddingLeft: 10 }}>
                    <Upload
                      name="avatar"
                      style={{ width: "100%" }}
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChangeAvata}
                    >
                      {this.state.imageUrl ? (
                        <img
                          src={this.state.imageUrl}
                          alt="avatar"
                          style={{ width: "100%" }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </Col>
                </Row>
              </Panel>
              <Panel
                header={<strong>Contact info</strong>}
                key="2"
                style={customPanelStyle}
              >
                <Row>
                  <Col>
                    <Form.Item {...formItemLayout} label="Email">
                      {this.fullNameFn(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Email">
                      {this.fullNameFn(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Email">
                      {this.fullNameFn(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Email">
                      {this.fullNameFn(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Email">
                      {this.fullNameFn(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Email">
                      {this.fullNameFn(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Email">
                      {this.fullNameFn(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Email">
                      {this.fullNameFn(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </Form>
        </Modal>
      </div>
    );
  }
}

Modal.propTypes = {
  form: PropTypes.func
};

export default Form.create({ name: "advanced_form" })(ModalOfUser);
