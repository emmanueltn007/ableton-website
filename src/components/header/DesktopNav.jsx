function DesktopNav ({ navLinks }) {
    return (
        <nav className="flex-1 flex items-center justify-between gap-16 text-lg">
            <div className="gap-2 hidden md:flex">
                {navLinks.map((navLink) => {
                    return (
                        <a href="#" key={navLink}>
                            {navLink}
                        </a>
                    );
                })}
                <a className="flex items-center gap-1" href="#">
                    More
                    <img className="h-6" src="./images/plus-solid-full.svg" alt="plus icon" />
                </a>
            </div>
            <div className="gap-2 hidden md:flex">
                <a href="#" className="text-blue-700">
                    Try Live 12 for free
                </a>
                <a href="#">
                    Log in or register
                </a>
            </div>
        </nav>
    );
}

export default DesktopNav