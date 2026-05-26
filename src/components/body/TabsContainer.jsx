import { Routes, Route, NavLink } from "react-router";
import About from "./About";
import Jobs from "./Jobs";
import Apprenticeships from "./Apprenticeships";

const tabs = ["About", "Jobs", "Apprenticeships"];

function TabsContainer () {
    return (
        <main className="px-8">
            <nav className="flex gap-4 text-lg py-4">
                {tabs.map((tab, index) => {
                    return (
                        <NavLink className={({isActive}) => isActive ? "text-[#ff764d]" : ""} key={tab-index} to={tab}>
                            {tab} 
                        </NavLink>
                    );
                })}
            </nav>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/apprenticeships" element={<Apprenticeships />} />
            </Routes>
        </main>
    );
}

export default TabsContainer