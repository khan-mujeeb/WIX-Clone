// import componenets 
import footer from "../../data";
import Accordion from "../common/Accordion";

// import assets
import logo from "../../assets/logo.svg"; 

const UpperFooter = () => {
    return (
        <footer className="">
            {/* desktop footer  */}
            <div className="   grid grid-cols-1 md:max-lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:max-3xl:grid-cols-6 gap-5 ">
                {footer.upperFooter.map((column, index) => (
                    <div key={index}>
                        <div className="footer-column hidden md:block">
                            <h3 className="font-semibold">{column.title}</h3>
                            <ul>
                                {column.items.map((item, idx) => (
                                    <li key={idx} className="py-1 text-gray-900">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                <div className=" flex flex-col gap-10">
                    <img className="w-20" src={logo} alt="logo" />
                    <p className="text-gray-900">{footer.about}</p>
                </div>
            </div>

            <Accordion className="block md:hidden" items={footer.upperFooter} />
        </footer>
    );
};

export default UpperFooter;
