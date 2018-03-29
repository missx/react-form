import React from 'react';
import { Image } from 'semantic-ui-react'

import './SideSection.css';

export default function SideSection(props) {

    return (
        <div className="SideSection">
            <Image className=" " src={require('../../assets/images/cute_girl.svg')} size='small'
            centered circular/>
        </div>
    );
}