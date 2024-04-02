const dummydata = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
];

import CircilarButton from "../common/CircilarButton.jsx";

const TemplateBody = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 common-horizontal-padding">
            {dummydata.map((item, index) => (
                <div
                    key={index}
                    className=" relative bg-white shadow-md p-4 h-56"
                >
                    <img
                        className=" absolute w-full h-full "
                        src={item}
                        alt="template"
                    />

                    <div className=" absolute h-full w-full flex-center z-10 opacity-0 hover:opacity-95 transition-all duration-100 bg-white flex-col gap-5">
                        <CircilarButton className="bg-blue-600 text-white w-16" text="Edit" />
                        <CircilarButton
                            className="text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-600"
                            text="View"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TemplateBody;
