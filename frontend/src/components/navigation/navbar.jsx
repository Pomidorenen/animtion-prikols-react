import React, {useEffect, useRef} from 'react';
import Portal from "../portal";
import IconButton from "./iconButton";
import {useLocation} from "react-router-dom";

const Navbar = ({data =[]}) => {
    const currentLocation = useLocation();
    const targetButton = useRef();
    const select = useRef(0);

    const moveButtonTarget = (index,x,size,translateX)=>{
        targetButton.current.style.left = `${x*index}px`;
        targetButton.current.style.width = `${size}px`;
        targetButton.current.style.transform = `translateX(${translateX}px)`;
    }

    useEffect(() => {
        data.forEach(({to}, index) => {
            if(to===currentLocation.pathname){
                select.current = index;
                moveButtonTarget(select.current,60,20,25);
            }
        });
    }, [currentLocation.pathname]);


    return (
        <Portal>
            <nav className="navbar absolute-bottom">
                {data.map(({to, icon, name}, index) => {
                    if(to===currentLocation.pathname){
                        select.current = index;
                    }
                    return <IconButton key={index}
                                       onHover={()=>moveButtonTarget(index,60,60,18)}
                                       onLeave={()=>{
                                         moveButtonTarget(select.current,60,20,25);
                                       }}
                                       select={currentLocation.pathname===to}
                                       icon={icon}
                                       to={to}
                                       name={name}/>
                })}
                <div ref={targetButton} className={"target-button"} ></div>
            </nav>
        </Portal>
    );
};

export default Navbar;