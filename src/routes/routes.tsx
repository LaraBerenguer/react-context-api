import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starships from '../pages/StarshipsPage';
import Layout from "../layout/layout";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";
import SignUp from "../auth/SignUp";
import LogIn from "../auth/LogIn";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/starships' element={<Starships />} />
                    <Route path='/starships/:id' element={<DetailsPage />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<LogIn />} />
                </Route>
            </Routes>
        </Router>
    )
};

export default AppRoutes;