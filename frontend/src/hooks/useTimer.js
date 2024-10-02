import {useEffect, useState} from "react";

export default function useTimer() {
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date());
        },1000);
        return ()=>{
            clearInterval(interval);
        }
    },[]);
    const addZero = (value) =>{
        return(value.toString().length===1)?0+value.toString():value
    }
    const hours = addZero(time.getHours());
    const minutes = addZero(time.getMinutes());
    const seconds = addZero(time.getSeconds());
    return{
        hours,
        minutes,
        seconds,
        toString:()=>(`${hours}:${minutes}:${seconds}`)
    }
}