import React from 'react';
import Photo from "./photo";
import AddPhoto from "./addPhoto";

const Photos = ({title,data}) => {
    return (
        <div className="photos">
            <h1 className="photos-header">{title}</h1>
            <section className="photos-body">
                {data.map((value, index) => {
                    return <Photo key={index} name={`Photo #${index+1}`} src={value}/>
                })}
                <AddPhoto/>
            </section>
        </div>
    );
};

export default Photos;