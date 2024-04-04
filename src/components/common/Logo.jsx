import logo from "../../assets/logo.svg";

const Logo = ({className}) => {
    return <img className={`w-16 ${className}`} src={logo} alt="logo" />;
};

export default Logo;
