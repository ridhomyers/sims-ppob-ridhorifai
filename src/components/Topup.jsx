import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { nominalTopup } from "../constant";

const Topup = () => {
  const [topup, setTopup] = useState("");
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="my-10">
        <div className="my-8 max-[450px]:text-center">
          <p className="">Silahkan masukan</p>
          <h1 className="font-semibold text-xl">Nominal Top Up</h1>
        </div>
        <div className="flex max-[450px]:flex-col">
          <div className="flex flex-col w-[80%] mx-auto">
            <input
              type="text"
              value={topup}
              onChange={(ev) => setTopup(ev.target.value)}
              className="border border-third rounded mb-4 mt-1 py-2 px-4"
              placeholder="masukan nominal Top Up"
            />
            <button
              onClick={() => setTopup("")}
              className="bg-primary text-[white] rounded py-2 mt-1"
            >
              Top Up
            </button>
          </div>
          <div className="flex gap-5 flex-wrap ml-10 mt-1 max-[450px]:mt-10">
            {nominalTopup.map((nominal) => (
              <button
                onClick={() => setTopup(nominal * 1000)}
                key={nominal}
                className="py-2 px-5 hover:bg-primary hover:text-[white] border border-third rounded h-[40px] text-center items-center w-[120px]"
              >
                Rp{nominal}.000
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
