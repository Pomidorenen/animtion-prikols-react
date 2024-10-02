import {useEffect, useState} from "react";

export default function useBattery(){
    const [value, setValue] = useState({ level: 0, charging: false });
    const handleChange = ({ target: { level, charging } }) => {
        setValue({ level, charging });
    }
    useEffect(() => {
        let battery;
        navigator.getBattery().then(b => {
            battery = b;
            battery.addEventListener("levelchange", handleChange);
            battery.addEventListener("chargingchange", handleChange);
            handleChange({ target: battery });
        });
        return () => {
            if(battery !==undefined && battery !== null){
                battery.removeEventListener("levelchange", handleChange);
                battery.removeEventListener("chargingchange", handleChange);
            }
        };
    }, []);

    return value;
}