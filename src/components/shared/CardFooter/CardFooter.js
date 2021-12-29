import React from 'react';
import './CardFooter.css'

const CardFooter = ({ dateUpdated }) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'Jul',
        'Aug',
        'Sep',
        'Ocr',
        'Nov',
        'Dec'
    ];
    const date = new Date(dateUpdated);
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    let runningMonth = months[month - 1];

    return (
        <small className='card-footer'>
            Last updated: {
                ` ${runningMonth} ${day}, ${year} @ ${hour > 12 ? hour - 12 : hour}:${minute} ${hour <= 11 ? 'am' : 'pm'}`
            }
        </small>
    );
};

export default CardFooter;