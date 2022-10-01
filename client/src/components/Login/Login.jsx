import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import PageProgress from "react-page-progress";
import PreLoader from "../PreLoader/PreLoader";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.png";
import icon from "../../images/icon.png";
import authImage from "../../images/auth-image.png";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate("/register");
};

  const handleSubmit = (event) => {
    //const form = event.currentTarget;
    event.preventDefault();
    navigate("/home_data");
  };

  var sour = "https://cdn-icons-png.flaticon.com/128/4205/4205106.png";

  return (
    <div>
      {loading ? (
        <PreLoader />
      ) : (
        <div>
          <PageProgress color={"#17548d"} height={4} />

          <div className="navbar">
            <div className="navbar-head">
              <a href="/" className="navbar-logo">
                <img className="nav-logo" src={sour} alt="logo" style={{height:"70px", width:"93px"}} />
              </a>
              <div className="navbar-links">
                <span onClick={handleClick}>Home</span>
                <span onClick={handleClick}>About</span>
                <span onClick={handleClick}>Contact Us</span>
              </div>
            </div>
            <div className="justify-content-left buttons">
              <button>Login</button>
              <button onClick={handleSignupClick}>Signup</button>
            </div>
          </div>

          <div className="login-container">
            <Container>
              <Row>
                <Col>
                  <div className="card-top">
                    <div className="card-icon">
                    </div>
                    <Button className="register-button" onClick={handleSignupClick}>SIGNUP</Button>
                    <Button className="login-button">SIGNIN</Button>
                  </div>
                  <Card className="login-card" style={{ width: "30rem" }}>
                    <Card.Title>Sign in into Your Account</Card.Title>
                    <Card.Body>
                      <Form
                        className="login-form"
                        // noValidate
                        // validated={validated}
                        onSubmit={handleSubmit}
                      >

                        <Form.Group className="mb-3" controlId="formEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter valid email.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter Password.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Button className="submit-button" type="submit">
                          SIGN IN
                        </Button>
                        <div className="error-message">
                          {error ? errorMessage : ""}
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <div className="auth-image">
                    <img
                      className="left-logo"
                      src={authImage}
                      alt="left-logo"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
