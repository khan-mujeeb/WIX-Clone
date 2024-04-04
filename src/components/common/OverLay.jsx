import CircilarButton from "./CircilarButton";



const OverLay = () => {
    return (
        <div className="overlay absolute top-0 left-0 h-full w-full flex-center z-10 opacity-0 group-hover:opacity-95 transition-all duration-100 bg-white flex-col gap-5">
            <CircilarButton
                className="bg-blue-600 text-white w-24"
                text="Edit"
            />
            <CircilarButton
                className="text-blue-500 border w-24 border-blue-500 hover:text-white hover:bg-blue-600"
                text="View"
            />
        </div>
    );
};

export default OverLay;
