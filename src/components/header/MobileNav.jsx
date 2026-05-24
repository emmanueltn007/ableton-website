function MobileNav ({ handleMenuToggle, isOpen, navLinks }) {
    return (
        <nav className="md:hidden">
            <button 
                onClick={() => handleMenuToggle()}
                className="flex gap-1 items-center cursor-pointer"
            >
                Menu
                <img 
                    className="h-4"
                    src="./images/caret-down-solid.svg" 
                    alt="dropdown-icon" 
                />
            </button>
            <ul className={`${isOpen === false ? "hidden" : "flex"}`}>
                {navLinks.map((navLink) => {
                    return (
                        <li key={navLink}>
                            {navLink}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default MobileNav