import React from "react";
import {Form} from 'react-bootstrap';

const Inputs = (props) => {
    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.onChange}
                />


                <Form.Text className="text-muted">
                    {props.errorMessage}
                </Form.Text>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}
        </div>
    );
}

export default Inputs;