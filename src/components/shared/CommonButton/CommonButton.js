import React from 'react';
import './CommonButton.css';

const CommonButton = ({ children }) => {
    return (
        <button className={children === 'view' ? 'common-button view' : 'common-button remove'
        }>
            {children}
        </button >
    );
};

export default CommonButton;