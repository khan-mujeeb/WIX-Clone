
const DropDown = ({key, title, items}) => {
    return (
        <div className="mr-6 transition-all duration-200">
            <div className="dropdown inline-block relative group">
                <button className=" text-gray-700 font-semibold py-2 rounded inline-flex items-center">
                    <span className="mr-1">{title}</span>
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                </button>

                {/* dropdown list  */}
                <ul className="dropdown-menu shadow-md group-hover:block opacity-100 bg-white  z-10  absolute hidden text-gray-700 pt-1">
                    
                    {items.map((item, index) => {
                        return (
                            <li key={index} className=" w-56">
                                <a
                                    className=" py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DropDown;
