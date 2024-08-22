import React from 'react';
import './FirstPhoto.css';

import photo from '../../assets/images/portraits/DSC00501.jpg';

function FirstPhoto(){

    return (
        <div className='first-outer'>
            <div className='first-wrapper'>
                <img src={photo} loading={"eager"}></img>
            </div>
        </div>
    )
}

export default FirstPhoto;