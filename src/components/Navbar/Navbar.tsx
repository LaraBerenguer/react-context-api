import { Link } from "react-router-dom";

interface Navbar {
    onClick?: () => void;
}

const Navbar = () => {
    return (
        <>
            <div className="navbar dark:bg-black border-t border-b border-gray-800 flex flex-row justify-center dark:text-gray-400 mb-4">
                <div className="navbar-page-home border border-gray-800">
                    <div className="navbar-page-home-link border-b-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500 py-2 px-4">
                        <Link to="/">HOME</Link>
                    </div>
                </div>
                <div className="navbar-page-starships border border-gray-800">
                    <div className="navbar-page-starships-link border-b-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500 py-2 px-4">
                        <Link to="/starships">STARSHIPS</Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default Navbar;