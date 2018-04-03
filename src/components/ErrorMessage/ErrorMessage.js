import React from 'react';
import { Message } from 'semantic-ui-react';

export default function ErrorMessage(props) {

    return (
        <Message
        error
        header={props.header}
        content={props.content}
        />
    )
}