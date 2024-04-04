// libraries
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons used
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const HeaderSection = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <section className=" border border-gray-200">
            <div className="flex justify-between h-32 items-center  common-horizontal-padding">
                {/* subtitle  */}
                <h1 className=" text-4xl font-bold">
                    Pick the Website Template You Love
                </h1>

                {/* search bar  */}
                <div className={` relative transition-all duration-300 h-12 ${isFocused?`w-96`:`w-72`}`}>
                    <input
                        type="text"
                        placeholder="Search all templates.."
                        className="border-b border-black focus:outline-none hover:border-blue-500 focus:border-blue-700 focus:border-b-2 transition-colors h-full w-full "
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    {isFocused ? (
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="absolute right-2 top-4 text-black cursor-pointer transition-transform transform hover:scale-110"
                            onClick={() => setIsFocused(false)}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute right-2 top-4 text-black cursor-pointer transition-transform transform hover:scale-110"
                            onClick={() => setIsFocused(true)}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
