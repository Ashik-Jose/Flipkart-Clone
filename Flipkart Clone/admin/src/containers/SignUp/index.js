import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layouts/index.js';
import Inputs from '../../components/UI/Inputs/index.js';

const SignUp=() => {
    return(
        <div>
        <Layout />
        <Container>
            <Row style={{marginTop: '50px'}}>
                <Col md={{span: 6, offset: 3}}>
                    <Form>
                       <Row>
                        <Col md={6}>
                            <Inputs 
                            label="First Name"
                            type="text"
                            placeholder="First Name"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                        <Col md={6}>
                            <Inputs 
                            label="Last Name"
                            type="text"
                            placeholder="Last Name"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                        <Col md={10}>
                            <Inputs 
                            label="Email"
                            type="email"
                            placeholder="Email"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                        <Col md={10}>
                            <Inputs 
                            label="Password"
                            type="password"
                            placeholder="Password"
                            value=""
                            onChange={() => {}}
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
}

export default SignUp;