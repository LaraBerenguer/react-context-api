/*interface HeaderProps {
    onClick?: () => void;
    login: () => void;
}*/
import { useAuth } from "../../auth/AuthContext";

import { Link } from "react-router-dom";
import Socials from "../Socials";

const Header = () => {
    const {currentUser} = useAuth();
    return (
        <div className="header dark:bg-black flex flex-row justify-center dark:text-white pb-4 px-8">
            <div className="header-container flex w-full">
                <div className="header-socials content-center m-4 basis-1/4 flex justify-start items-center">
                    <Socials />
                </div>
                <div className="header-logo m-4 basis-2/4 flex justify-center">
                    <div className="header-logo-container">
                        <img src=".././logo.png" className="logo h-20"></img>
                    </div>
                </div>
                <div className="header-login content-center m-4 basis-1/4 flex justify-end items-center">
                    <div className="header-login-container">
                        {currentUser? <Link to="/login" className="dark:text-grey-500">LOG OUT</Link> : <Link to="/login" className="dark:text-grey-500">LOG IN</Link>} 
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Header;