import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./Footer.css";

export default function Footer() {

  var sour = "https://cdn-icons-png.flaticon.com/128/4205/4205106.png";

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={2}>
            <div className="footer-logo">
              {/* <img src={icon} alt="logo" /> */}
             <img className="nav-logo" src={sour} alt="logo" style={{height:"80px", width:"120px"}} />
             <h3>Coding Hub</h3>
      
            </div>
          </Col>
          <Col xs={6}>
            <div className="footer-text">
              <h2>Support</h2>
              <p>
               Coding hub Web App which provide paid / free e-learning courses. 
              This project was made as a part of construct week curriculum of Masai School.
                <a href="surajitgokarna@gmai.com">Here</a><br/>
                Copyright © 2022, All rights reserved.
              </p>
            </div>
          </Col>
          <Col className="colum">
            <Row>
              <div className="footer-contact">
                <h2>Contact Us</h2>
                <Row>
                  <a href="mailto:support@codeclub.com">
                    <MdEmail className="contact-icon"/>{" "}
                    support@codinghub.com
                  </a>
                </Row>
                <Row>
                  <p>
                    <FaPhoneAlt className="contact-icon"/>{" "}
                    +91-9547333589
                  </p>
                </Row>
              </div>
            </Row>
            <Row>
              <div className="footer-text">
                <h2>Follow Us</h2>
                <p>
                  <a
                    className="footer-icon"
                    href="https://www.facebook.com/surajit-dhar"
                  >
                    <FaFacebookSquare className="footer-icon" size={40} />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.instagram.com/hey_m_surajit"
                  >
                    <FaInstagram className="footer-icon" size={40} />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://twitter.com/ExplorerSurajit"
                  >
                    <FaTwitterSquare className="footer-icon" size={40} />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.linkedin.com/in/surajit-dhar-ab3390230/"
                  >
                    <FaLinkedin className="footer-icon" size={40} />
                  </a>
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
