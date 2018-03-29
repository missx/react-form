import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

import './FormSection.css';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];

const dayOptions = [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
];

const monthOptions = [
    { key: 'january', text: 'January', value: 'january' },
    { key: 'february', text: 'February', value: 'february' },
];

const yearOptions = [
    { key: '1988', text: '1988', value: '1988' },
    { key: '1989', text: '1989', value: '1989' },
];

let countryOptions = [
    { key: 'austria', text: 'Austria', value: 'austria' },
    { key: 'bulgaria', text: 'Bulgaria', value: 'bulgaria' },
    { key: 'colombia', text: 'Colombia', value: 'colombia' },    
];

export default class FormSection extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {
        return (
            <div className="FormSection">
                <div className="Form">
                    <Form>
                        <Form.Field inline required>
                            <label>First name</label>
                            <Input placeholder='John' />
                        </Form.Field>
                        <Form.Field inline required>
                            <label>Last name</label>
                            <Input placeholder='Doe' />
                        </Form.Field>
                        <Form.Field inline className="Inline">
                            <label>Gender</label>
                            <Form.Select options={genderOptions} placeholder="Choose gender"/>
                        </Form.Field>
                        <Form.Group inline>
                            <Form.Field className="Inline">
                                <label>Date of Birth</label>
                                <Form.Select fluid options={dayOptions} placeholder="Day"/>
                            </Form.Field>
                            <Form.Field className="Inline">
                                <Form.Select fluid options={monthOptions} placeholder="Month"/>
                            </Form.Field>
                            <Form.Field className="Inline">
                                <Form.Select fluid options={yearOptions} placeholder="Year"/>
                            </Form.Field>
                        </Form.Group>
                        <Form.Field inline required>
                            <label>Email</label>
                            <Input placeholder='johndoe@mail.com' />
                        </Form.Field>
                        <Form.Field inline className="Inline">
                            <label>Country</label>
                            <Form.Select options={countryOptions} placeholder="Choose country"/>
                        </Form.Field>
                    </Form>
                    <div className="ButtonGroup">
                        <Button.Group>
                            <Button color='teal'>Save</Button>
                            <Button color='grey'>Cancel</Button>
                        </Button.Group>
                    </div>
                </div>
            </div>
        );
    }
}