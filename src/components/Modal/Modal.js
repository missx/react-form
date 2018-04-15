import React from 'react';

import ReactModal from 'react-modal';

export default function Modal(props) {

    return (
        <ReactModal 
        isOpen={props.isOpen}
        className="Modal"
        shouldCloseOnOverlayClick={true}>
            <div>
                <h2>Hi, {props.modalInformation.name}!</h2>
                <button onClick={props.close}>close</button>
            </div>
            
            <div>
                You are a {props.modalInformation.gender} who was born on {props.modalInformation.dob}
                in {props.modalInformation.country}. Your email is {props.modalInformation.email}.
            </div>
        </ReactModal>
    );
}