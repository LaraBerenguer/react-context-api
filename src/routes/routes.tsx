import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from pages
import Starships from '../pages/StarshipsPage';
//import Pilots from pages
//import Movies from pages

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' /*element={<Home />}*//>
                <Route path='/starships' element={<Starships />}/>
                <Route path='/pilots' /*element={<Pilots />}*//>
                <Route path='/movies' /*element={<Movies />}*//>
            </Routes>
        </Router>
    )
};

export default AppRoutes;