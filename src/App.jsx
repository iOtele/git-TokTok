import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokToknews from "./Pages/TokToknews";
import AboutUs from "./Components/AboutUs";

const SMSServicesPromotion = () => (
  <div className="p-8">SMSServicesPromotion</div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TokToknews />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/sms-service" element={<SMSServicesPromotion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
