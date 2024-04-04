import React from "react";

// import Components
import TemplateBody from "./TemplateBody.jsx";
import Pagination from "../common/Pagination.jsx";
import MiddleNavbar from "../navbar/MiddleNavbar.jsx";

const WensiteTempleteSection = () => {
    return (
        <section className=" ">
            {/* navbar  */}
            <MiddleNavbar />

            {/* toolbar */}
            <div className=" h-32 common-horizontal-padding flex justify-between items-center ">
                <h2 className=" font-semibold text-xl">
                    All Website Templates
                </h2>

                {/* dropdown */}
                <div className="flex items-center">
                    <p className="mr-2">Sort by</p>
                    <select className="px-2 py-1 rounded-md outline-none">
                        <option value="recommendation">Recommendation</option>
                        <option value="newest">Newest</option>
                        <option value="toptemplate">Top Template</option>
                    </select>
                </div>
            </div>

            {/* main content */}
            <TemplateBody currentPage={1} totalPages={70} onPageChange={1} />

            {/* pagination for page number */}
            <Pagination currentPage={2} totalPages={70} onPageChange={1} />
        </section>
    );
};

export default WensiteTempleteSection;
