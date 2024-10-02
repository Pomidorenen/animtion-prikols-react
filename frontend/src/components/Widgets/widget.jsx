import React, {useEffect, useRef, useState} from 'react';
import Portal from "../portal";

const Widget = ({children}) => {
    const ref = useRef(null);
    const moveWidget = useRef(false);
    const [position, setPosition] = useState([50,50]);
    const style = {
        top:`${position[0]}%`,
        left:`${position[1]}%`,
        transition:"0.1s"
    }
    useEffect(()=>{
        const {offsetWidth, offsetHeight} = document.body;
        const pointerDown = (e)=>{
            if(e.target === ref.current){
                moveWidget.current = true;
            }
        }
        const pointerMove = (e)=>{
            if(moveWidget.current){
                const {pageX, pageY} = e;
                const {width} = ref.current.getBoundingClientRect();
                setPosition(prev=>{
                    return[(pageY/offsetHeight)*100,((pageX-(width/2))/offsetWidth)*100];
                });
            }
        }
        const pointerUp = (e)=>{
            moveWidget.current = false;
        }
        document.addEventListener("pointerdown",pointerDown);
        document.addEventListener("pointermove",pointerMove)
        document.addEventListener("pointerup", pointerUp);
        return ()=>{
            document.removeEventListener("pointerdown",pointerDown);
            document.removeEventListener("pointermove",pointerMove);
            document.removeEventListener("pointerup",pointerUp);
        }
    },[document.body.offsetWidth,document.body.offsetHeight]);
    return (
        <Portal>
            <div className="widget" style={style}>
                <div    ref={ref}
                        className={"widget-header cursor-pointer"}>
X
                </div>
                <section className={"widget-body"}>
asd
                </section>
            </div>
        </Portal>
    );
};

export default Widget;