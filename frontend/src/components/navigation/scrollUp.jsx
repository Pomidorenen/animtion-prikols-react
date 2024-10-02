import React, {useEffect} from 'react';
import Portal from "../portal";

const ScrollUp = () => {
    const [visible, setVisible] = React.useState(false);
    useEffect(() => {
        const checkScroll = (e)=>{
            const topScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(topScroll){
                setVisible(true);
            }else {
                setVisible(false);
            }
        }
        document.addEventListener('scroll', checkScroll);
        return ()=>{
            document.removeEventListener('scroll', checkScroll);
        }
    }, []);
    return (
        <Portal>
            {visible&&<div
                onClick={()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }}
                className="absolute-left-bottom event-pointer cursor-pointer opacity">
                <h1>&uarr;</h1>
            </div>}
        </Portal>

    );
};

export default ScrollUp;