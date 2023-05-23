import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layouts/index.js";
import Inputs from "../../components/UI/Inputs/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signUp } from "../../actions/user.action.js";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (auth.authenticate) {
    return <Navigate to={"/"} />;
  }

  if(user.loading) {
    return <p>Loading...</p>
  }

  const register = () => {
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signUp(user));
  };

  return (
    <div>
      <Layout />
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={register}>
              <Row>
                <Col md={6}>
                  <Inputs
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Inputs
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
                <Col md={10}>
                  <Inputs
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col md={10}>
                  <Inputs
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
