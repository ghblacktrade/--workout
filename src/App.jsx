import React from 'react';
import Home from "./components/pages/Home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Link, Route
} from "react-router-dom";
import Workout from "./components/pages/Workout/Workout";


const App = () => {
    return (
        <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Workout" element={<Workout />} />
        </Routes>
    );
};

export default App;