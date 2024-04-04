// import components
import UpperFooter from "./UpperFooter.jsx";
import DividerLine from "../common/DividerLine.jsx";
import LowerFooter from "./LowerFooter.jsx";

const Footer = () => {
    return <footer className="w-full   ">
        
        {/* upper footer  */}
        <UpperFooter />

        <DividerLine className={`w-full`}/>

        {/* lower footer */}
        <LowerFooter />
    </footer>;
};

export default Footer;
