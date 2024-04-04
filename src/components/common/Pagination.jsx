import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const renderPages = () => {
        const pages = [];
        const range = 2;
        const start = Math.max(1, currentPage - range);
        const end = Math.min(totalPages, currentPage + range);

        for (let i = start; i <= end; i++) {
            pages.push(
                <button
                    key={i}
                    className={`px-3 py-1 mx-1 rounded-md ${
                        i === currentPage
                            ? "text-black text-bold"
                            : "bg-white text-gray-600 hover:text-blue-500"
                    }`}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            );
        }

        if (start > 1) {
            pages.unshift(
                <button
                    key={1}
                    className="px-3 py-1 mx-1 rounded-md bg-white text-gray-600 hover:text-blue-100"
                    onClick={() => onPageChange(1)}
                >
                    1
                </button>
            );
            if (start > 2) {
                pages.unshift(
                    <button key="prev" className="px-3 py-1 mx-1 rounded-md bg-white gray-600 hover:text-blue-500" onClick={() => onPageChange(currentPage - 1)}>
                        {"<"}
                    </button>
                );
            }
            if (start > 3) {
                pages.unshift(
                    <span key="ellipses" className="px-3 py-1 mx-1">
                        ...
                    </span>
                );
            }
        }

        if (end < totalPages) {
            if (end < totalPages - 1) {
                pages.push(
                    <span key="ellipses" className="px-3 py-1 mx-1">
                        ...
                    </span>
                );
            }
            if (end < totalPages) {
                pages.push(
                    <button
                        key={totalPages}
                        className="px-3 py-1 mx-1 rounded-md bg-white gray-600 hover:text-blue-500"
                        onClick={() => onPageChange(totalPages)}
                    >
                        {totalPages}
                    </button>
                );
            }

            pages.push(
                <button key="next" className="px-3 py-1 mx-1 rounded-md bg-white gray-600 hover:text-blue-500" onClick={() => onPageChange(currentPage + 1)}>
                    {">"}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="flex justify-center my-4 text-xl py-32">
            {currentPage > 1 && (
                <button className="px-3 py-1 mx-1 rounded-md bg-white text-gray-600 hover:text-blue-500" onClick={() => onPageChange(currentPage - 1)}>
                    {"<<"}
                </button>
            )}
            {renderPages()}
            {currentPage < totalPages && (
                <button className="px-3 py-1 mx-1 rounded-md bg-white text-gray-600 hover:text-blue-500" onClick={() => onPageChange(currentPage + 1)}>
                    {">>"}
                </button>
            )}
        </div>
    );
};

export default Pagination;
