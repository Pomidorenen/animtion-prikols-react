import React from 'react';
import ReactDOM from 'react-dom';
const portal = document.getElementById("portal");

const Portal = ({children}) => {
    return ReactDOM.createPortal(
        <div className="absolute w-100 h-100 portal">
            {children}
        </div>,
        portal
    )
};

export default Portal;