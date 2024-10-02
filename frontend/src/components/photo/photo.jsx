import React, {useState} from 'react';
import Spin from '../loading/spin.jsx';
import {useInView} from "react-intersection-observer";

const Photo = ({name,src}) => {
    const {ref,inView}= useInView({
        threshold:0.25,
        triggerOnce:true
    });
    return (
        <div className={"photo"} ref={ref}>
           <div className="photo-container">
               {(inView)?<img className={"photo-image"} src={src} alt={"null"}/>:<Spin/>}
            </div>
            <h1 className={"photo-title"}>{name}</h1>
        </div>
    );
};

export default Photo;