import './App.css';
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Main from "./Components/Main/Main";
import Players from "./Components/Players/Players";
import Teams from "./Components/Teams/Teams";
import Games from "./Components/Games/Games";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <>

            <Header/>

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/players" element={<Players/>}/>
                <Route path="/teams" element={<Teams/>}/>
                <Route path="/games" element={<Games/>}/>
            </Routes>


        </>
    );
}

export default App;
