import React from 'react';
import CommonButton from '../CommonButton/CommonButton';
import './ButtonGroup.css'

const ButtonGroup = () => {
    return (
        <div className="button-group">
            <CommonButton>
                view
            </CommonButton>
            <CommonButton>
                remove
            </CommonButton>
        </div>
    );
};

export default ButtonGroup;