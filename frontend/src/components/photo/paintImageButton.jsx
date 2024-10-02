import React, {useState} from 'react';

const PaintImageButton = ({src,onDelete, onLoad}) => {
    const [visible, setVisible] = useState(false);
    return (
        <div
            onPointerLeave={()=>{setVisible(false)}}
            onPointerEnter={()=>{setVisible(true)}}
            onPointerOver={()=>{setVisible(true)}}
            className={"flex gap-1 flex-column flex-center align-center" }>
            <img
                 onClick={onLoad}
                 src={src}
                 alt={"not found"}
                 className={"image-icon-paint"}/>
            {(visible)&&<div className={"image-paint-footer"}>
                <button onClick={onDelete} className={"btn"}>
                    delete
                </button>
                <button className={"btn"} onClick={()=>{
                    const link = document.createElement("a");
                    link.href = src;
                    link.download = "picture.png";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}>
                    downland
                </button>
            </div>}
        </div>
    );
};

export default PaintImageButton;