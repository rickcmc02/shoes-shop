import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import KakaoLogin  from 'react-kakao-login';
import HorizontalLine from '../components/HorizonLine';

const SignUpModal = ({ show, onHide }) => {
  const token = "8719578404796b81ba6889629b0cb51a";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const submitHandler = (e) => {
    if(password === confirmPassword){
      onHide();
    } else {
      alert('password dismatch');
    }
  }

  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name" 
              onChange={(e) => setName(e.target.value)}  
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}  
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}  
            />
          </Form.Group>

          <Form.Group>
            <Form.Check type="checkbox" label="Get personalized recommendation" />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          block 
          variant="info" 
          type="button" 
          className="my-3"
          onClick={submitHandler}
        >
          Sign Up
        </Button>
        <HorizontalLine text={"OR"} />
        <GoogleLogin 
          render={renderProps=>{
            return (
            <Button 
              onClick={renderProps.onClick} 
              disabled={renderProps.diabled}
              style={{ 
                backgroundColor: "#176BEF", 
                borderColor:"#176BEF",
              }}
            >
              <i className="fab fa-google"></i>&nbsp; Sign Up with Google
            </Button>
            );
          }}
        />
        <KakaoLogin
          token={token}
          onSuccess={console.log}
          onFail={console.error}
          onLogout={console.info}
          useLoginForm
        />
      </Modal.Footer>
      </Container>
    </Modal>
  );
}

export default SignUpModal
