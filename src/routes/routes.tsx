import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starships from '../pages/StarshipsPage';
import Layout from "../layout/layout";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/starships' element={<Starships />} />
                    <Route path='/starships/:id' element={<DetailsPage />} />
                </Route>
            </Routes>
        </Router>
    )
};

export default AppRoutes;