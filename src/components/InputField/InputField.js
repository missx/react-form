import React from 'react';
import { Form, Input } from 'semantic-ui-react';

export default function InputField(props) {
    return (
        <Form.Field inline required={props.required} error={props.inputError}>
            <label>{props.label}</label>
            <Input placeholder={props.placeholder} type={props.type}
            onChange={props.onChange} name={props.inputName}/>
        </Form.Field>
    )
}