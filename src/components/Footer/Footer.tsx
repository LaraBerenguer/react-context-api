import Socials from "../Socials";

const Footer = () => {
    return (
        <div className="footer py-10 dark:bg-black">
            <div className="footer-text text-xs dark:text-white text-center m-4">
                <p>More from <a href="https://www.starwars.com/" target="_blank">Star Wars</a>:</p>
            </div>
            <div className="footer-socials">
                <Socials />
            </div>
            <div className="footer-legal text-xs dark:text-white text-center m-4 p-4">
                <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
            </div>
        </div>
    )
};

export default Footer;