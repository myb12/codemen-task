import React from 'react';
import './CardHeader.css'

const CardHeader = ({ name }) => {
    return (
        <div>
            <h1 className='heading'>{name}</h1>
        </div>
    );
};

export default CardHeader;