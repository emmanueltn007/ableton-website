function MobileNav ({ handleMenuToggle, isOpen, navLinks }) {
    return (
        <nav className="md:hidden text-white">
            <button 
                onClick={() => handleMenuToggle()}
                className={`${isOpen ? "text-white" : "text-black"} transition duration-300 ease-in-out text-lg flex gap-1 items-center cursor-pointer relative z-50`}
            >
                Menu
                <svg className={`h-4 ${isOpen ? "text-white rotate-180" : ""} transition duration-300 ease-in-out`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z" fill="currentColor" /></svg>
            </button>
            <div className={`${isOpen === false ? "-translate-y-full bottom-0" : "flex flex-col gap-4 translate-y-0 top-0"} bg-blue-700 absolute w-full left-0 z-10 pt-16 px-4 transition-all duration-300 ease-in-out`}>
                <ul className="flex flex-col gap-4 text-lg font-semibold">
                    {navLinks.map((navLink) => {
                        return (
                            <li key={navLink}>
                                {navLink}
                            </li>
                        );
                    })}
                </ul>
                <h4 className="text-lg font-semibold">
                    More on Ableton.com
                </h4>
                <ul>
                    <li>
                        Blog
                    </li>
                    <li>
                        Ableton for the classroom
                    </li>
                    <li>
                        Ableton for Colleges and Universities
                    </li>
                    <li>
                        Certified training
                    </li>
                    <li>
                        About Ableton
                    </li>
                    <li>
                        Jobs
                    </li>
                    <li>
                        Apprenticeships
                    </li>
                </ul>
                <h2 className="text-lg font-semibold">
                    More on Ableton
                </h2>
                <div className="grid grid-cols-4 gap-4 overflow-scroll">
                    <div className="flex flex-col">
                        <h4 className="font-semibold">
                            Loop
                        </h4>
                        <p>
                            Watch Talks, Performances and Features from Ableton's Summit for Music Makers
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold">
                            Learning Music
                        </h4>
                        <p>
                            Learn the fundamentals of music making right in your browser.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold">
                            Learning Synths
                        </h4>
                        <p>
                            Get started with synthesis using a web-based synth and accompanying lessons.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold">
                            Making Music
                        </h4>
                        <p>
                            Some tips from 74 Creative Strategies for Electronic Producers.
                        </p>
                    </div>
                </div>
            </div>
            
        </nav>
    );
}

export default MobileNav