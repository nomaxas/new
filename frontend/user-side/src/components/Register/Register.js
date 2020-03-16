import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Grid, Row, Col, InputGroup} from 'react-bootstrap';
import ReactDOM from 'react-dom';

function Register() {
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
                {['checkbox'].map(type => (
                    <div key={`custom-inline-${type}`} className="mb-3">
                        <Form.Check
                            custom
                            inline
                            label="1"
                            type={type}
                            id={`custom-inline-${type}-1`}
                        /><Form.Check
                            custom
                            inline
                            label="1"
                            type={type}
                            id={`custom-inline-${type}-1`}
                        /><Form.Check
                            custom
                            inline
                            label="1"
                            type={type}
                            id={`custom-inline-${type}-1`}
                        /><Form.Check
                            custom
                            inline
                            label="1"
                            type={type}
                            id={`custom-inline-${type}-1`}
                        /><Form.Check
                            custom
                            inline
                            label="1"
                            type={type}
                            id={`custom-inline-${type}-1`}
                        /><Form.Check
                            custom
                            inline
                            label="1"
                            type={type}
                            id={`custom-inline-${type}-1`}
                        /><Form.Check
                            custom
                            inline
                            label="1"
                            type={type}
                            id={`custom-inline-${type}-1`}
                        /><Form.Check
                            custom
                            inline
                            label="1"
                            type={type}
                            id={`custom-inline-${type}-1`}
                        />
                        <Form.Check
                            custom
                            inline
                            label="2"
                            type={type}
                            id={`custom-inline-${type}-2`}
                        />
                        <Form.Check
                            custom
                            inline
                            disabled
                            label="3 (disabled)"
                            type={type}
                            id={`custom-inline-${type}-3`}
                        />
                    </div>
                ))}
            </Form.Group>
        <Button type="submit">Submit form</Button>
        </Form>
    );
}

render("<Register />");

export default Register;