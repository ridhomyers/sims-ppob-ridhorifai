import React from "react";
import { service, promo } from "../constant";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "../index.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <div>
          <div className="flex flex-wrap gap-7 justify-center mt-10">
            {service.map((service) => (
              <div key={service.title} className="items-center max-w-[60px]">
                <img src={service.icon} alt={service.title} />
                <p className="text-center mt-1 max-w-[60px] text-xs">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:mb-16">
          <p className="font-semibold text-sm mt-10">Temukan promo menarik</p>
          <div className="flex gap-5 mt-3">
            {promo.map((promo) => (
              <img key={promo} src={promo} alt={promo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
