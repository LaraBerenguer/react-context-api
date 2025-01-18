/*interface HeaderProps {
    onClick?: () => void;
    login: () => void;
}*/

import { Button } from "../Button/Button";
import Socials from "../Socials";

const Header =() => {
    return (
        <>
            <div className="header dark:bg-black flex flex-row justify-between dark:text-white pb-4">
                <div className="header-socials content-center m-4">
                    <Socials />                    
                </div>
                <div className="header-logo">
                    <div className="header-logo-container m-4">
                        <img src=".././logo.png" className="logo h-20"></img>
                    </div>
                </div>
                <div className="header-login content-center m-4">
                    <div className="header-login-container">
                        <Button label={"Login"} primary={false}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;