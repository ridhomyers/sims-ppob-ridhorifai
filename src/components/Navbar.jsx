import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="justify-between flex py-5 items-center">
      <div className="flex cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <h1 className="ml-2 pt-1 font-semibold">SIMS PPOB</h1>
      </div>
      <div className="flex gap-10 max-[450px]:hidden">
        <p
          className="hover:text-secondary cursor-pointer"
          onClick={() => navigate("/top-up")}
        >
          Top Up
        </p>
        <p
          className="hover:text-secondary cursor-pointer"
          onClick={() => navigate("/transactions")}
        >
          Transaction
        </p>
        <p
          className="hover:text-secondary cursor-pointer"
          onClick={() => navigate("/akun")}
        >
          Akun
        </p>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 z-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start text-[white] gap-3 flex-1 flex-col">
            <li className="font-poppins font-medium cursor-pointer text-[16px]  ">
              <Link to={"/top-up"}>Top Up</Link>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px]  ">
              <Link to={"/transactions"}>Transaksi</Link>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px]  ">
              <Link to={"/akun"}>Akun</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
