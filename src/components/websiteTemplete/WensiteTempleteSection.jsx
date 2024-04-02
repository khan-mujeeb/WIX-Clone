import React from "react";

// import Components  
import TemplateBody from "./TemplateBody.jsx";

const WensiteTempleteSection = () => {
    return <section className=" ">

        {/* toolbar */}
        <div className=" h-32 common-horizontal-padding flex justify-between items-center ">
            <h2>All Website Templates</h2>
            
            {/* dropdown */}
            <div className="flex ">
                <p>Sort by</p>
                <select className=" outline-none">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="price">Price</option>
                </select>
            </div>
        </div>

        {/* main content */}
        <TemplateBody />
    </section>;
};

export default WensiteTempleteSection;
