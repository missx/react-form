import React from 'react';

import ReactModal from 'react-modal';

export default function Modal(props) {

    return (
        <ReactModal 
        isOpen={props.isOpen}
        contentLabel={props.contentLabel}/>
    );
}