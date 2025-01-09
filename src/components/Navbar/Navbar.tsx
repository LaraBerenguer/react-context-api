import { Link } from "react-router-dom";

interface Navbar {
    onClick?: () => void;
}

const Navbar = () => {
    return (
        <>
            <div className="navbar dark:bg-black border-t border-b border-gray-800 flex flex-row justify-center dark:text-gray-400 mb-4">
                <div className="navbar-page-home py-2 px-4 border border-gray-800">
                    <div className="navbar-page-home-link">
                        <Link to="/">HOME</Link>
                    </div>
                </div>
                <div className="navbar-page-starships py-2 px-4 border border-gray-800">
                    <Link to="/starships">STARSHIPS</Link>
                </div>
            </div>
        </>
    )
};

export default Navbar;