import {useState} from "react";

export default function useInput(input) {
    const [value, setValue] = useState(input);
    const onChange = (e)=>{
        setValue(e.target.value);
    }
    return {
        value,
        onChange,
    }
}