import React from 'react';
import useRequest from "../../hooks/useRequets";
import Photos from "../../components/photo/photos";

const PhotoGallery = () => {
    const {data,loading}=useRequest(()=>fetch("/images"));
    return (
        <div>
            {loading && <Photos data={data} title={"Photo Gallery"}/>}
            <div className={"footer"}/>
        </div>
    );
};

export default PhotoGallery;