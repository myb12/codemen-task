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
    const date = new Date(dateUpdated * 100);
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    console.log(date);

    return (
        <small className='card-footer'>
            Last updated: {
                ` ${months.[month + 1]} ${day}, ${year} @ ${hour > 12 ? hour - 12 : hour}:${minute} ${hour <= 11 ? 'am' : 'pm'}`
            }
        </small>
    );
};

export default CardFooter;



/* let unix_timestamp = 1549312452
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime); */