function DesktopNav ({ navLinks }) {
    return (
        <nav className="flex items-cente gap-16">
            <div className="gap-2 hidden md:flex">
                {navLinks.map((navLink) => {
                    return (
                        <a href="#" key={navLink}>
                            {navLink}
                        </a>
                    );
                })}
            </div>
            <div className="gap-2 hidden md:flex md:justify-end">
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