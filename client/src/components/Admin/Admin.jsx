import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import "./Admin.css";

export default function Admin() {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin_login");
      }
  
  }, [navigate]);

  const handleSubmit = (event) => {
   navigate("/admin_home")
  };

  return (
    <div>
      <div className="container login">
        <div className="login-heading">
          <h1>Admin Home</h1>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card className="card-login">
            <Card.Title>Login</Card.Title>
            <Card.Body>
              <Form
                className="login-form"
                noValidate
                validated={validated}
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
                    autoComplete="off"
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
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter Password.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button className="submit-button" type="submit">
                  LOG IN
                </Button>
                <div className="error-message">{error ? errorMessage : ""}</div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
