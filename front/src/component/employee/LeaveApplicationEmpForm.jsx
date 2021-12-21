import React, { Component } from "react";
import { Form,Button,Col,Row } from "react-bootstrap";

class LeaveApplicationEmpForm extends Component {
  state = {
  };
  componentWillMount()  {
     
  }
  render() {
    return (
      <div>
        
        <h2 id="role-form-title">Add AttendaceApplicationEmp Details</h2>
 <div id="role-form-outer-div"><Form id="form" onSubmit={this.props.onLeaveApplicationEmpSubmit}>
  

 
  
  <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Leave Type
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="" disabled selected>
                    Select your option
                  </option>
    <option value="Leave Time">Leave Time </option>
    <option value="Sick ">Sick </option>
    <option value="Privilege ">Privilege</option>
          </Form.Control>
    </Col>
    </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Date
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="date" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Check in
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="time" placeholder="checkin" required/>
    </Col>
  </Form.Group>


  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Check out
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="time" placeholder="checkout" required/>
    </Col>
  </Form.Group>



  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Reason for leave
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Reason for leave" required/>
    </Col>
  </Form.Group>
   
  <Form.Group as={Row} >
    <Form.Label column sm={2}>
    Leave Status
    </Form.Label>
    <Col sm={10} className="form-input">
    <Form.Control as="select"  required>
    <option value="1" selected>Pending</option>
          </Form.Control>
    </Col>
    </Form.Group>
 
  

  <Form.Group as={Row} id="form-submit-button">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
  <Form.Group as={Row} id="form-cancel-button">
    <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
      <Button type="reset" onClick={this.props.onFormClose}>cancel</Button>
    </Col>
  </Form.Group>
</Form></div>
      </div>
    );
  }
}

export default LeaveApplicationEmpForm;
