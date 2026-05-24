import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
function Header () {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = isOpen ? ["Live","Push", "Move", "Note", "Link", "Shop", "Packs", "Help", "Try Live 12 for free", "Log in or register"] : ["Live","Push", "Move", "Note", "Link", "Shop", "Packs", "Help"];

    function handleMenuToggle () {
        setIsOpen(prev => !prev);
    }

    return (
        <header className="flex items-center p-4 font-['Roboto',sans-serif] border-2 border-b-gray-500">
            <div className="flex items-center gap-4 md:w-full">
                <div className="relative z-50">
                    <svg className={`h-6 ${isOpen ? "text-white" : "text-black"}`} role="img" aria-label="Logo Ableton" class="main-nav__logo__image" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 21"><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
                </div>
                <DesktopNav navLinks={navLinks} />
                <MobileNav handleMenuToggle={handleMenuToggle} isOpen={isOpen} navLinks={navLinks} />
            </div>
            
        </header>
    );
}

export default Header