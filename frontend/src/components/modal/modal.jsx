import React from 'react';
import Portal from "../portal";

const Modal = ({visible,setVisible,children}) => {
    return (
        <Portal>
            {visible?<div>
                {children}
            </div>:<></>}
        </Portal>
    );
};

export default Modal;