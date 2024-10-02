import React, {useEffect, useRef, useState} from 'react';
import useInput from "../../hooks/useInput";
import PaintImageButton from "../../components/photo/paintImageButton";

function getImageData(canvasRef){
    const {ctx,canvas} = getCanvasAndCtx(canvasRef);
    return  ctx.getImageData(0, 0, canvas.width,canvas.height);
}
function getImageFromCanvas(canvasRef){
    const imageData = getImageData(canvasRef);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    const image = new Image();
    image.src = canvas.toDataURL();
    return image;
}
async function imageDateToCanvas(image,canvasRef){
    const {ctx} = getCanvasAndCtx(canvasRef);
    const bitmap = await createImageBitmap(image);
    ctx.drawImage(bitmap, 0, 0);
}
function drawCircle(ctx,color,radius,x,y){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
function drawLine(ctx,color,radius,x0,y0,x1,y1){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.lineWidth = radius * 2;
    ctx.stroke();
    ctx.closePath();
}
function clearCanvas(canvasRef) {
    const {canvas,ctx} = getCanvasAndCtx(canvasRef);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fill();
    ctx.closePath();
}
function getCanvasAndCtx({current}){
    const canvas = current;
    const ctx = canvas.getContext('2d');
    return {
        canvas,
        ctx
    }
}
const Paint = () => {
    const canvasRef = useRef(null);
    const drawing = useRef(false);
    const position = useRef(null);

    const inputRadius = useInput(10);
    const radius = inputRadius.value;
    const inputColor = useInput("#000000");
    const color = inputColor.value;
    const [image, setImage] = useState([]);

    const deleteImage = (id)=>{
        setImage(prevState => prevState.filter((x,i) => i !== id));
    }
    useEffect(()=>{
        clearCanvas(canvasRef);
    },[canvasRef]);

    useEffect(() => {
        const {canvas,ctx} = getCanvasAndCtx(canvasRef);
        const mouseDown = (e)=>{
            document.addEventListener("mousemove",mouseMove);
            if(e.target === canvas){
                drawing.current = true;
            }
        }
        const mouseUp = ()=>{
            drawing.current = false;
            position.current = null;
            document.removeEventListener("mousemove",mouseMove);
        }
        const mouseMove = (e)=>{
            if(drawing.current){
                const {left, top} = canvas.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;
                if(position.current === null){
                    position.current = [x,y];
                }
                drawCircle(ctx,color,radius,x,y);
                drawLine(ctx,color,radius,x,y,position.current[0],position.current[1]);
                position.current = [x,y];
            }
        }
        document.addEventListener("mousedown",mouseDown);
        document.addEventListener("mouseup",mouseUp);
        return()=>{
            document.removeEventListener("mousedown",mouseDown);
            document.removeEventListener("mousemove",mouseMove);
            document.removeEventListener("mouseup",mouseUp);
        }
    }, [color,radius]);

    return (
        <div className="container">
            <div className={"flex gap-1 flex-center flex-wrap body-paint"}>
                <canvas ref={canvasRef}
                        className={"paint-canvas"}
                        id="paint"
                        width="640px"
                        height="480px"/>
                <div className={"menu-paint"}>
                    <input min="1" max="100" type={"range"} {...inputRadius}/>{radius}
                    <input className={"input-color"}  {...inputColor} type="color"/>
                    <button className={"btn"} onClick={() => clearCanvas(canvasRef)}>clear</button>
                    <button className={"btn"} onClick={() =>
                        setImage(prev => {
                            return [...prev, getImageFromCanvas(canvasRef)]
                        })
                    }> create photo
                    </button>
                </div>
            </div>
            <div className={"images-panel-paint margin-top-1"}>
            {image.map((el,i)=>{
                return <PaintImageButton key ={i}
                                         onDelete = {()=>{
                                             deleteImage(i);
                                         }}
                                         src={el.src}
                                         onLoad={() => imageDateToCanvas(el, canvasRef)}/>
            })}
            </div>
            <div className={"footer"}/>
        </div>
    );
};

export default Paint;