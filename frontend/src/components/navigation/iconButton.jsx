import React, {useState, useRef, useLayoutEffect} from 'react';
import {Link} from "react-router-dom";
import {gsap} from "gsap";
const IconButton = ({to, icon, name, select,onClick,onHover,onLeave}) => {
    const descriptionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    useLayoutEffect(()=>{
        gsap.fromTo(descriptionRef.current,{opacity:0,y:24},{opacity:1,y:0})
    },[visible]);
    return (
        <Link to={to}
              onPointerLeave={onLeave}
              onPointerEnter={onHover}>
            <div>
                <div className={`${!visible && "visibility-hide"}`}>
                    <p ref={descriptionRef} className={"btn-description-nav"}>
                        {name}
                    </p>
                </div>
                <div onPointerLeave={() => setVisible(false)}
                     onPointerEnter={()=>setVisible(true)}
                     className={select?"btn-nav-icon-active":"btn-nav-icon"}>
                    <img width={"70%"} src={icon} alt="icon"/>
                </div>
            </div>
        </Link>
    );
};

export default IconButton;