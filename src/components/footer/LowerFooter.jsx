// import assets 
import {footer} from "../../data";

// import library 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const LowerFooter = () => {
    return (
        <div className="footer-padding flex justify-between flex-wrap gap-5">


            {/* social logos  */}
            <div className=" flex gap-3">
            {footer.socialMediaIcons.map((socialMedia, index) => (
                    <a href={socialMedia.link} key={index} className=" hover:text-gray-700 text-2xl text-black">
                        <FontAwesomeIcon icon={socialMedia.icon} />
                    </a>
                ))}
            </div>


            {/* terms and conditions */}
            <div className="flex gap-5 flex-wrap">
                {footer.tnc.map((tnc, index) => (
                    <span key={index} className="text-gray-900">
                        {tnc}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LowerFooter;
