import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthContext";

const AuthMenu = () => {

    const { currentUser } = useAuth();
    const { logOut } = useAuth();
    const [error, setError] = useState<string | null>();
    const navigate = useNavigate();

    const handleLogout = async () => {
        setError("");
        try {
            await logOut();
            navigate("/login");
        } catch {
            setError("Failed to log out.")
        }
    };

    return (
        <div className="header-login-container">
            {currentUser ? <Link to="/login" className="dark:text-grey-500" onClick={handleLogout}>LOG OUT</Link> : <Link to="/login" className="dark:text-grey-500">LOG IN</Link>}
            {error &&
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Oh no! </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            }
        </div>
    )
};

export default AuthMenu;