import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInModal from '../modals/SignInModal';
import SignUpModal from '../modals/SignUpModal';

const Header = () => {

  const [email, setEmail] = useState('');
  const [loginState, checkLoginState] = useState(false);
  const [SignUpModalOn, setSignUpModalOn] = useState(false);
  const [SignInModalOn, setSignInModalOn] = useState(false);
  const setEmailHandler = (ee) => {
    setEmail(ee)
  };

  return (
    <>
      <SignUpModal 
        show={SignUpModalOn} 
        onHide={()=>{ setSignUpModalOn(false) }}
      ></SignUpModal>
      <SignInModal 
        show={SignInModalOn} 
        onHide={()=>{ setSignInModalOn(false) }}
        setEmailHandler={setEmailHandler}
      ></SignInModal>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Shoes shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Button variant="primary" 
                show={checkLoginState}
                onHide={()=>{ checkLoginState(false) }}
                onClick={()=>setSignInModalOn(true)}>Sign In</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="secondary" onClick={()=>setSignUpModalOn(true)}>Sign Up</Button>
            </Nav.Link>
            <div>
              {email}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header


/*
    { props.alertOpen === true
      ? (
        <div className="inventory-alert">
          <h4>20% OFF NOW</h4>
          <button onClick={()=>{
            props.dispatch({type : 'alertClose'})
          }}>close</button>
        </div>
        )
      : null
    }
*/