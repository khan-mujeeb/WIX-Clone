
// import assets 
import { template } from "../../data/index.js";
import OverLay from "../common/OverLay.jsx";



const TemplateBody = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 common-horizontal-padding gap-y-20 ">
            {template.map((item, index) => (
                <div
                    key={index}
                    className="relative bg-white shadow-mdh-56 group"
                >
                    <img className="w-full h-full shadow-md" src={template[index].image} alt="template" />

                    {/* overlay components that will be displayed on hover */}
                    <OverLay/>

                    <p className=" mt-4">{template[index].name}</p>
                </div>
            ))}

            
        </div>
    );
};

export default TemplateBody;
