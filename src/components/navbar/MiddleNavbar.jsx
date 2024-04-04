// libraries
import { useMediaQuery } from "@react-hook/media-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// assets
import { middleNavbar, templateType } from "../../data";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

// components
import DropDown from "../common/DropDown";
import DividerLine from "../common/DividerLine";
import SideNavDrawer from "../common/SlideNavDrawer";

const MiddleNavbar = () => {
    // state to check the width of the screen
    const [isOpen, setIsOpen] = useState(false);

    const { matches, width } = useMediaQuery("(min-width: 768px)");

    return (
        <div className=" shadow-md border-b border-gray-200 ">
            <div className="flex common-horizontal-padding justify-between items-center">

                {/* desktop view  */}
                <div className="hidden sm:visible sm:flex flex-cente ">
                    {middleNavbar.map((item, index) => {
                        return (
                            <DropDown
                                key={index}
                                title={item.title}
                                items={item.items}
                            />
                        );
                    })}
                </div>

                <div className="hidden sm:visible sm:flex ">
                    {templateType.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className=" flex gap-2 ml-6 py-3 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-600 transition-colors duration-300"
                            >
                                {/* <DividerLine className={`rotate-90 `} /> */}
                                {/* rendering of nav item based on screen width */}
                                {matches ? (
                                    <div>{item.title}</div>
                                ) : (
                                    <div>{item.title.split(" ")[0]}</div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* mobile view  */}
                <div className="visible sm:hidden flex flex-center gap-2 py-5 text-lg cursor-pointer"
                onClick={() => setIsOpen(true)}
                >
                    <h2>Browse Categories</h2>
                    <FontAwesomeIcon icon={faCaretRight} />
                </div>
            </div>
            <SideNavDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default MiddleNavbar;
