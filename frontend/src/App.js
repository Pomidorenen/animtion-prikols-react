import {Route, Routes} from "react-router-dom";
import PhotoGallery from "./pages/photoGallery/photoGallery.";
import WatchPage from "./pages/watchPage/watchPage";
import Notes from "./pages/notes/notes";
import Landing from "./pages/lainding/landing";
import Navbar from "./components/navigation/navbar";
import ScrollUp from "./components/navigation/scrollUp";
import gallery from "./components/assets/svg/images.svg";
import home from "./components/assets/svg/home.svg";
import clock from "./components/assets/svg/clock.svg";
import music from "./components/assets/svg/music.svg";
import threeIcon from "./components/assets/svg/three.svg";
import note from  "./components/assets/svg/note.svg";
import paint from "./components/assets/svg/paintIcon.svg";
import ThreeScene from "./pages/threeScene/threeScene";
import Paint from "./pages/paint/paint";
import Headers from "./components/share/headers";
import Widget from "./components/Widgets/widget";
import Music from "./pages/music/music";



const routers = [
    {
        to: "/",
        name:"home",
        icon: home,
        element:<Landing/>
    },
    {
        to: "/gallery",
        name:"photo gallery",
        icon:gallery,
        element:<PhotoGallery/>
    },
    {
        to:"/watch",
        name:"watch",
        icon:clock,
        element:<WatchPage/>
    },
    {
        to:"/three",
        name:"three scene",
        icon: threeIcon,
        element: <ThreeScene/>
    },
    {
        to:"/music",
        name: "music gallery",
        icon: music,
        element:<Music/>
    },
    {
        to:"/note",
        name:"notes",
        icon:note,
        element:<Notes/>
    },
    {
        to:"/paint",
        name:"paint",
        icon:paint,
        element: <Paint/>
    }
]

function App() {
  return (
    <div className="App">
        <Headers/>
        <Routes path={"/"} element={<h1>Hello world</h1>}>
            {
                routers.map(({element,to},index) => {
                    return <Route element={element} path={to} key={index} />;
                })
            }
        </Routes>
        <Widget/>
        <Widget/>
        <ScrollUp/>
        <Navbar data={routers}/>
    </div>
  );
}

export default App;
