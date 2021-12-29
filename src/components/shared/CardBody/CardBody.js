import React from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import CardHeader from '../CardHeader/CardHeader';
import './CardBody.css'

const CardBody = ({ name, intents }) => {
    return (
        <div>
            <CardHeader name={name} />
            <span className='intents' >{intents} Intents</span>
            <ButtonGroup />
        </div>
    );
};

export default CardBody;