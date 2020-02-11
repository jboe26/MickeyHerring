import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

class Connect extends Component {
  render() {
    return (
      <div>
        <h2>Connect With Me!</h2>
        <br />
        <div>


          Phone: <div>803-331-2139</div><br />
          E-mail: <div><a href="mailto:joshrboepple@outlook.com">Email me!</a></div><br />



          

        </div>
        <br />
        Please list your name, phone number, email address, and a brief message so I can easily get in touch with you.

          Thanks.
        <Form controlId="Form">
          <Form.Group controlId="formGroupName">
            <Form.Label>Name: </Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPhone">
            <Form.Label>Phone: </Form.Label>
            <Form.Control type="phone" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group controlId="formGroupMessage">
            <Form.Label>Message: </Form.Label>
            <Form.Control type="text" placeholder="Enter a message" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
  </Button>
        </Form>
<br />
        
      </div>



    );
  }
}

export default Connect;