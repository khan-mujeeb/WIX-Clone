// libraries used 
import React from "react";

// components used
import NavBar from "./components/navbar/NavBar.jsx";
import HeaderSection from "./components/header/HeaderSection.jsx";
import WensiteTempleteSection from "./components/websiteTemplete/WensiteTempleteSection.jsx";
import PromotionSection from "./components/promotion/PromotionSection.jsx";

const App = () => {
    return <div>
        <NavBar />
        <HeaderSection />
        <WensiteTempleteSection />
        <PromotionSection />

    </div>;
};

export default App;
