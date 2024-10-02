import React from 'react';

function arrow (value, maxValue, size){
    const style = {
        height: `${size*4}px`,
        width: `${25+(size*8)}%`,
        transform: `translate(0, -50%) rotate(${((value/maxValue)*360)-90}deg)`,
    }
    return <div style={style} className="watch-arrow"/>
}

const RoundClock = ({hours, minutes, seconds}) => {
    return (
        <div className={"watch-circle"}>
            {arrow(hours,12,3)}
            {arrow(seconds,60,1)}
            {arrow(minutes,60,2)}
            <div className={"watch-point-arrow"}/>
        </div>
    );
};

export default RoundClock;