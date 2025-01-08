interface Navbar {
    onClick?: () => void;
}

const Navbar = () => {
    return (
        <>
            <div className="navbar dark:bg-black border-t border-b border-gray-800 flex flex-row justify-center dark:text-gray-400">
                <div className="navbar-page-home py-2 px-4 border border-gray-800">
                    <div className="navbar-page-home-link">
                        {/*<Link />*/}
                        <p>HOME</p>
                    </div>
                </div>
                <div className="navbar-page-starships py-2 px-4 border border-gray-800">
                    {/*<Link />*/}
                    <p>STARSHIPS</p>
                </div>
            </div>
        </>
    )
};

export default Navbar;