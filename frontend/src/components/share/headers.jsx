import React from 'react';
import Battery from "./battery";
import useTimer from "../../hooks/useTimer";
import useDate from "../../hooks/useDate";

const Headers = () => {
    const {hours, minutes} = useTimer();
    const date = useDate();
    return (
        <header className={"header gap-1"}>
            <Battery size={0.25}/>
            <div>
                {date.toString()}
            </div>
            <div>
                {`${hours}:${minutes}`}
            </div>
        </header>
    );
};

export default Headers;