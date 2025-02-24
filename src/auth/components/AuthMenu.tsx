import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../AuthContext";
import person from '../../assets/img/person.svg';

const AuthMenu = () => {
    const { currentUser } = useAuth();
    const { logOut } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setError("");
        try {
            await logOut();
            navigate("/login");
        } catch {
            setError("Failed to log out.");
        }
    };

    return (
        <div className="header-login-container p-4">
            <div className="flex flex-col sm:flex-row items-center">
                <div className="mb-2 sm:mb-0">
                    <img src={person} alt="Login and Logout" className="w-5 h-5 mx-3 dark:filter dark:invert dark:grayscale" />
                </div>
                {currentUser ? (<Link to="/login" className="dark:text-white" onClick={handleLogout}>LOG OUT</Link>)
                    : (<Link to="/login" className="dark:text-white">LOG IN</Link>)}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2 sm:mt-0 sm:ml-4" role="alert">
                        <strong className="font-bold">Oh no! </strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthMenu;