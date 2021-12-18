import React, { Component } from "react";
// import "./LeaveApplicationHRFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationHRForm extends Component {
  state = {
    // LeaveApplicationHRData: this.props.editData["LeaveApplicationHRName"],

    // LeavetypeData: this.props.editData["Leavetype"],
    DateData: this.props.editData["Date"].slice(0,10),
    checkinData: this.props.editData["checkin"],
    checkoutData: this.props.editData["checkout"],
    ReasonforleaveData: this.props.editData["Reasonforleave"],
    nameData:
      this.props.editData["employee"][0]["FirstName"] +
      " " +
      this.props.editData["employee"][0]["LastName"]
    // StatusData: this.props.editData["Status"],

    // value={this.state.CompanyNameData}
    // onChange={value => this.onCompanyNameDataChange(value)}
  };
  //   onLeavetypeDataChange(e) {
  //     this.setState({ CLeavetypeData: e.target.value });
  //   }

  //   onStatusDataChange(e) {
  //     this.setState({StatusData: e.target.value });
  //   }

  componentWillMount() {}

  render() {
    return (
      <div>
        <h2 id="role-form-title">
          Edit Leave Application Of {this.state.nameData}
        </h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onLeaveApplicationHREditUpdate(this.props.editData, e)
            }
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Leave Type
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option
                    value="Sick Leave"
                    selected={this.props.editData["Leavetype"] === "Sick Leave"}
                    disabled
                  > 
                    Sick Leave
                  </option>
                  <option
                    value="Leave Time"
                    selected={
                      this.props.editData["Leavetype"] === "Leave Time"
                    }
                    disabled
                  >
                    Leave Time
                  </option>
                  <option
                    value="Privilege Leave"
                    selected={
                      this.props.editData["Leavetype"] === "Privilege Leave"
                    }
                    disabled
                  >
                    Privilege Leave
                  </option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  required
                  disabled
                  value={this.state.DateData}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                check in
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="time"
                  required
                  disabled
                  value={this.state.checkinData}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                check out
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="time"
                  required
                  disabled
                  value={this.state.checkoutData}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Reason for leave
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Reason for leave"
                  required
                  disabled
                  value={this.state.ReasonforleaveData}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Leave Status
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="Pending" selected disabled>
                    Pending
                  </option>
                  <option
                    value="2"
                    selected={this.props.editData["Status"] === 2}
                  >
                    Approve
                  </option>
                  <option
                    value="3"
                    selected={this.props.editData["Status"] === 3}
                  >
                    Reject
                  </option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Update</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset" onClick={this.props.onFormEditClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default LeaveApplicationHRForm;
