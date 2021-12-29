import React from 'react';
import CardBody from '../shared/CardBody/CardBody';
import CardFooter from '../shared/CardFooter/CardFooter';
import './CommonCard.css';
import boltIcon from '../../assets/images/boltIcon.svg';

const CommonCard = ({ data }) => {
    const { name, originType, intents, dateUpdated } = data;

    return (
        <div className="card">
            <p className={originType === 'automated' ? 'variant automated' : 'variant manual'}>
                {
                    originType === 'automated' && <img src={boltIcon} alt="Bolt icon" />
                }
                Automate Origin
            </p>
            <CardBody name={name} intents={intents} />
            <CardFooter dateUpdated={dateUpdated} />
        </div>
    );
};

export default CommonCard;