import {useState} from "react";

export default function useDate(){
    const [date, setDate] = useState(new Date());
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    return {
        year,
        month,
        day,
        toString:()=>date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' }),
    };
}