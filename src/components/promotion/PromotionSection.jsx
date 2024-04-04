import CircilarButton from "../common/CircilarButton";

const PromotionSection = () => {
    return (
        <section className="px-4 hidden  sm:visible h-96 bg-green-1000 w-full flex-center flex-col gap-10">
            <h1 className="text-center text-xl sm:text-3xl lg:text-5xl text-white font-bold">
                Want Help Picking a Template?
            </h1>
            <h2 className="text-center text-md sm:text-lg lg:text-xl text-white font-semibold">
                Get tips for finding the template that’s right for you
            </h2>
            <CircilarButton
                className="bg-white text-green-1000  lg:w-56 text-md sm:text-lg lg:text-xl hover:opacity-80"
                text="Help Me Choose"
            />
        </section>
    );
};

export default PromotionSection;
