import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layouts/index.js';
import Inputs from '../../components/UI/Inputs/index.js';
import {login} from '../../actions/auth.action.js';
import {useDispatch} from 'react-redux';

const SignIn = () => {

    const dispatch = useDispatch();
    const userLogin=(e)=> {

        e.preventDefault();
        const user = {
            email:'aeds',
            password:'sdef'
        }
        dispatch(login(user));
    }

    return (
        <div>
            <Layout />
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={userLogin}>
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