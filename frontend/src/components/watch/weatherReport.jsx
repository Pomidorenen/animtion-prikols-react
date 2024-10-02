import React, {useEffect, useState} from 'react';
import useGeolocation from "../../hooks/useGeolocation";

const WeatherReport = () => {
   const position = useGeolocation();
    const [weatherData, setWeatherData] = useState({
        data:null,
        loading:true,
        error:null
    });
    useEffect( () => {
        const controller = new AbortController();
        const {latitude,longitude} = position;
        if(longitude!==null && latitude!==null) {
            setWeatherData({
                data:null,
                loading:true,
                error:null
            });
            fetch(`/api/weather?lat=${latitude}&lon=${longitude}`,
                {
                    signal:controller.signal,
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }

                })
                .then(res => res.json())
                .then(data=>{
                    const newData = {data,loading:false,error: null};
                    if( data === null || JSON.stringify(data) === "{}" ){
                       newData.error = "Data is null or {}";
                    }
                    setWeatherData(prev=>Object.assign({}, prev,newData))
                })
                .catch((error)=>
                    setWeatherData(prev=>
                    Object.assign({}, prev,{error,loading:false})
                    )
                );
            }
        return()=>{
            controller.abort();
        }
    }, [position]);
    useEffect(()=>{
        console.log(weatherData)
    },[weatherData])
    return (
        (!weatherData.loading&&weatherData.error===null)? <div className={"weather-container"}>
            <div>
                <img src={weatherData.data[1].weather.icon.url} alt={"img"}/>
                <h2> {weatherData.data[1].weather.description}</h2>
            </div>
            <div>
                <h1>{weatherData.data[0].name}</h1>
                <div className={"flex"}><h1>{weatherData.data[1].weather.temp.cur}</h1>°C |°F</div>
                <div className={"flex"}>
                    <h3>wind:{weatherData.data[1].weather.wind.speed}m/s</h3>
                    <h1 style={{transform: `rotateX(${weatherData.data[1].weather.wind.deg}deg)`}}>&uarr;</h1>
                </div>
            </div>
        </div> : <div className={"weather-container"}>
            <div className={"loading-spin-weather"}/>
        </div>

    );
};

export default WeatherReport;