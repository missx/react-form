import React from 'react';

export default function FileInput(props) {

    return (
        <span>
            <label htmlFor="image" className="ui icon button yellow">
                <i className="upload icon"></i>
                {props.label}
            </label>
            <input type="file" id="image"
                style={{display: "none"}}
                ref={props.onUpload}
            />
        </span>
    )
}