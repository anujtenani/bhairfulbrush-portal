import React, {useState} from "react";
import {Container, Form, Button, Row, Col} from 'react-bootstrap';

const LoginForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Container style={{paddingBottom: '2rem'}}>
                <Row>
                    <Col style={{boxShadow: '0 0 10px gray', padding: '2rem', marginTop: '3rem', borderRadius: '5px'}} md={4}>
                        <h2>Sign In</h2>
                        <p>Access your dashboard</p>

                        <Form onSubmit={onFormSubmit}>
                            <Form.Group controlId="formBasicEmail" onChange={(e) => setEmail(e.target.value)}>
                                <Form.Label >Email Address</Form.Label>
                                <Form.Control type="email" size={"md"} placeholder="Johndoe@email.com" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" onChange={(e) => setPassword(e.target.value)}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" size={"md"} placeholder="Password" />
                                <Form.Text className="text-muted">
                                    <a href={'/forgot-password'}> Forgot Password? </a>
                                </Form.Text>
                            </Form.Group>

                            <Button variant="dark" type="submit">
                                Sign In
                            </Button>
                        </Form>

                        <h5>
                            Don't have an account yet?
                            <a href={'/signup'}> Sign Up</a>
                        </h5>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LoginForm