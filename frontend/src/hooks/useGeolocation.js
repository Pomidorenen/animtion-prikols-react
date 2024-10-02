import {useEffect, useState} from "react";

export  default  function useGeolocation(){
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition( (position) =>{
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    return position;
}