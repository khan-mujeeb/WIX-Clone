import { useState } from "react";
const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full max-w-md mx-auto block md:hidden">
            {items.map((item, index) => (
                <div key={index} className="border-b">
                    {console.log(item)}
                    <button
                        className="w-full py-4 px-6 text-left focus:outline-none"
                        onClick={() => toggleItem(index)}
                    >
                        <div className="flex items-center justify-between">
                            <span>{item.title}</span>
                        </div>
                    </button>
                    {openIndex === index && (
                        <div className="px-6 py-4">
                            {
                                <ul>
                                    {item.items.map((item, idx) => (
                                        <li key={idx} className="py-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
