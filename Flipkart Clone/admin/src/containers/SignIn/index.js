import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layouts/index.js';
import Inputs from '../../components/UI/Inputs/index.js';
import {login} from '../../actions';

const SignIn = () => {

    const userLogin=(e)=> {

        e.preventDefault();

        const user = {
            email:'',
            password:''
        }

        login(user);
    }

    return (
        <div>
            <Layout />
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={()=> login({email:'',password:''})}>
                           <Row>
                            <Col md={10}>
                            <Inputs 
                            label="Email"
                            type="email"
                            placeholder="Email"
                            value=""
                            onChange={() => {}}
                            />
                            </Col>
                            <Inputs 
                            label="Password"
                            type="password"
                            placeholder="Password"
                            value=""
                            onChange={() => {}}
                            />
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

export default SignIn;