// import libraries 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import components 
import Logo from "../common/Logo";
import DropDown from "../common/DropDown"

// import assets
import { navbar } from "../../data";

const NavBar = () => {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <nav className="flex nav-height  items-center justify-between flex-wrap bg-white p-6">
            

            {/* logo */}
            <Logo />

            {/* hamburger */}

            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <FontAwesomeIcon icon={faBars} />
                    
                </button>
            </div>
            <div
                className={`${
                    isExpanded ? `block` : `hidden`
                } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="ml-6 flex gap-5 text-sm lg:flex-grow">
                    {/* map idhar aaeyega  */}
                    {navbar.map((item, index) => (
                        // <p key={index}>{item.title}</p>
                        <DropDown
                                key={index}
                                title={item.title}
                                items={item.items}
                            />
                    ))}

                </div>
                <div>
                    <a
                        href="#"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                    >
                        Download
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
