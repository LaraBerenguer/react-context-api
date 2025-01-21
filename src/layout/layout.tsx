import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import "./layout.css";

const Layout = () => {

    const location = useLocation();
    const getBackground = () => {
        switch (location.pathname) {
            case "/":
                return "bg-homepage";
            case "/starships":
                return "bg-starships";
            case "/starships/:id":
                return "bg-details";
            case "/signup":
                return "bg-signup";
            case "/login":
                return "bg-login";
            default:
                return "";
        };
    };
    
    return(
        <div className={`${getBackground()} min-h-screen`}>
            <Header />
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;