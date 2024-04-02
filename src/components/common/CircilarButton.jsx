const CircilarButton = ({ text, className }) => {
    return <button className={` rounded-full py-4 px-6 ${className}`}>{text}</button>;
};

export default CircilarButton;