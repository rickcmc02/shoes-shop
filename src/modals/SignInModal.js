import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import KakaoLogin  from 'react-kakao-login';
import HorizontalLine from '../components/HorizonLine';

const SignInModal = ({ show, onHide, setEmailHandler }) => {
  const token = "8719578404796b81ba6889629b0cb51a";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    setEmailHandler(email);
    onHide();
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
          Sign In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              />
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
          Sign In
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
              <i className="fab fa-google"></i>&nbsp; Sign In with Google
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

export default SignInModal;