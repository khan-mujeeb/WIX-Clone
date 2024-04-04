// import Components
import Accordion from "./Accordion";

// import assets
import { middleNavbar } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faX } from "@fortawesome/free-solid-svg-icons";

const SideNavDrawer = ({ isOpen, setIsOpen }) => {
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-full">
            {/* Side Navigation Drawer */}
            <div
                className={` z-20 bg-white text-gray-800 w-full fixed top-0 right-0  transform transition-transform ease-in-out duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col">
                    <div className="p-4 flex justify-end">
                        {/* <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="text-2xl cursor-pointer text-blue-600"
                        onClick={toggleDrawer}
                    /> */}
                        <FontAwesomeIcon
                            icon={faX}
                            className="text-2xl cursor-pointer"
                            onClick={toggleDrawer}
                        />
                    </div>

                    <div>{<Accordion items={middleNavbar} />}</div>
                </div>
            </div>
        </div>
    );
};

export default SideNavDrawer;
