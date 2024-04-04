import { middleNavbar, templateType } from "../../data";
import DropDown from "../common/DropDown";
import DividerLine from "../common/DividerLine";

const MiddleNavbar = () => {
    return (
        <div className=" shadow-md border-b border-gray-200">
            <div className=" flex common-horizontal-padding justify-between">
                <div className="flex">
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

                <div className="flex">
                    {templateType.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className=" flex gap-2 ml-6 py-3 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-600 transition-colors duration-300"
                            >
                                {/* <DividerLine className={`rotate-90 `} /> */}
                                <div>{item.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MiddleNavbar;
