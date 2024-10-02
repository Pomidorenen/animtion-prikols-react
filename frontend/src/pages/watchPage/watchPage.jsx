import React from 'react';
import useTimer from "../../hooks/useTimer";
import useDate from "../../hooks/useDate";
import RoundClock from "../../components/watch/roundClock";
import WeatherReport from "../../components/watch/weatherReport";

const WatchPage = () => {
    const {hours,minutes,seconds,...timer} = useTimer();
    const date = useDate();
    return (
        <div className="container">
            <div className="watch-date underline-dot">
                {String(date)}
            </div>
            <div className="watch-time">
                {String(timer)}
            </div>
            <RoundClock hours={hours} minutes={minutes} seconds={seconds}/>
            <WeatherReport/>
            <div className={"footer"}/>
        </div>
    );
};

export default WatchPage;