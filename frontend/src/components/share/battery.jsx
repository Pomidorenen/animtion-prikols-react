import React from 'react';
import useBattery from "../../hooks/useBattery";

const Battery = ({size}) => {
    const {level, charging} = useBattery();
    return (
        <div className={"battery-icon"} style={{"--size": size}} >
            <div className={charging?"battery-change-charging":"battery-change"} style={{"--b": `${level}`,"--charging": charging}}>
                {`${(level * 100).toFixed(0)}%`}
            </div>
        </div>
    );
};

export default Battery;