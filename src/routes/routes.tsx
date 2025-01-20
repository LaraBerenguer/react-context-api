import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starships from '../pages/StarshipsPage';
import Layout from "../layout/layout";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";
import SignUp from "../auth/SignUp";
import LogIn from "../auth/LogIn";
import PrivateRoute from "../auth/PrivateRoute";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<PrivateRoute><HomePage /></PrivateRoute>} />
                    <Route path='/starships' element={<PrivateRoute><Starships /></PrivateRoute>} />
                    <Route path='/starships/:id' element={<PrivateRoute><DetailsPage /></PrivateRoute>} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<LogIn />} />
                </Route>
            </Routes>
        </Router>
    )
};

export default AppRoutes;