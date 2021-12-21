import React, { Component } from "react";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";

class LeaveApplicationEmpForm extends Component {
  state = {
    // LeaveApplicationEmpData: this.props.editData["LeaveApplicationEmpName"],

    // LeavetypeData: this.props.editData["Leavetype"],
    DateData: this.props.editData["Date"].slice(0,10),
    checkinData: this.props.editData["checkin"],
    checkoutData:this.props.editData["checkout"],
    ReasonforleaveData: this.props.editData["Reasonforleave"],
    // StatusData: this.props.editData["Status"],

    // value={this.state.CompanyNameData}
    // onChange={value => this.onCompanyNameDataChange(value)}
  };
//   onLeavetypeDataChange(e) {
//     this.setState({ CLeavetypeData: e.target.value });
//   }
  
  onDateDataChange(e) {
    this.setState({ DateData: e.target.value });
  }
  oncheckinDataChange(e) {
    this.setState({ checkinData: e.target.value });
  }

  oncheckoutDataChange(e) {
    this.setState({ checkoutData: e.target.value });
  }
  onReasonforleaveDataChange(e) {
    this.setState({ ReasonforleaveData: e.target.value });
  }
//   onStatusDataChange(e) {
//     this.setState({StatusData: e.target.value });
//   }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Edit AttendanceApplicationEmp Details</h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onLeaveApplicationEmpEditUpdate(this.props.editData, e)
            }
          >
           <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Leave Type
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="" disabled selected>
                    Select your option
                  </option>
    <option value="Leave Time"  selected={this.props.editData["Leavetype"] === "Leave Time"}>Leave Time</option>
    <option value="Sick Leave"  selected={this.props.editData["Leavetype"] === "Sick Leave"}>Sick Leave</option>
    <option value="Privilege Leave"  selected={this.props.editData["Leavetype"] === "Privilege Leave"}>Privilege Leave</option>
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
                  value={this.state.DateData}
                  onChange={value => this.onDateDataChange(value)}
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
                  value={this.state.checkinData}
                  onChange={value => this.oncheckinDataChange(value)}
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
                  value={this.state.checkoutDataData}
                  onChange={value => this.oncheckoutDataChange(value)}
                />
              </Col>
            </Form.Group>
           <Form.Group as={Row}>
                <Form.Label column sm={2}>
                     Reason for leave
                      </Form.Label>
                     <Col sm={10}  className="form-input">
                   <Form.Control type="Text" placeholder="Reason for leave" required
                      value={this.state.ReasonforleaveData}
                       onChange={value => this.onReasonforleaveDataChange(value)}/>
              </Col>
             </Form.Group>
   
  <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Leave Status
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="1" selected disabled>Pending</option>
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

export default LeaveApplicationEmpForm;
