import React, { useState } from "react";
import { profilPic } from "../assets";

const Hero = () => {
  const [name, setName] = useState("Ridho Rifai");
  const [saldo, setSaldo] = useState(0);
  return (
    <div className="flex relative">
      <div className="mt-5 ml-5">
        <img src={profilPic} alt="Profile" />
        <p className="mt-3">Selamat datang,</p>
        <h1 className="text-2xl font-semibold">{name}</h1>
      </div>
      <div className="bg-secondary text-[white] w-[50%] p-6 rounded-xl right-0 top-5 absolute">
        <h2 className="text-sm">Saldo anda</h2>
        <h1 className="text-xl py-3">Rp {saldo}</h1>
        <p className="text-xs">Lihat Saldo</p>
      </div>
    </div>
  );
};

export default Hero;
