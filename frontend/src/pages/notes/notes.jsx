import React, {useEffect} from 'react';
import useTimer from "../../hooks/useTimer";
import useRequest from "../../hooks/useRequets";

const Notes = () => {
    const timer = useTimer();
    const {loading,data} = useRequest(()=>fetch("api/notes/"));
   
    return (
        <div className={"container"}>
            <div className={"notes-title"}>
                Notes
            </div>
            {
                loading&&data.map(({title,description,id})=>{
                    return <div key={id}>{title} {description}</div>
                })
            }
            <div className={"footer"}/>
        </div>
    );
};

export default Notes;