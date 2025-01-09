import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from pages
import Starships from '../pages/StarshipsPage';
import Layout from "../layout/layout";
//import Pilots from pages
//import Movies from pages

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' /*element={<Home />}*/ />
                    <Route path='/starships' element={<Starships />} />
                    <Route path='/pilots' /*element={<Pilots />}*/ />
                    <Route path='/movies' /*element={<Movies />}*/ />
                </Route>
            </Routes>
        </Router>
    )
};

export default AppRoutes;