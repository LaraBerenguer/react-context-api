import AuthMenu from "../../auth/AuthMenu";
import Socials from "../Socials";


const Header = () => {    

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
                    <AuthMenu />
                </div>
            </div>            
        </div>
    )
};

export default Header;