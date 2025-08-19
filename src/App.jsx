import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokToknews from "./Pages/TokToknews";
import AboutUs from "./Components/AboutUs";
import TokTokHowItWorks from "./Components/TokTokHowItWorks";

// const SMSServicesPromotion = () => (
//   <div className="p-8">SMSServicesPromotion</div>
// );

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TokToknews />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howitworks" element={<TokTokHowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
