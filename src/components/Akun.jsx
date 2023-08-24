import React from "react";
import Navbar from "./Navbar";
import { profilPic } from "../assets";
import { Link } from "react-router-dom";

const Akun = () => {
  return (
    <div>
      <Navbar />
      <div className="items-center flex flex-col mt-7 mb-20 w-full">
        <img src={profilPic} alt="Profile" className="w-[100px]" />
        <h1 className="font-semibold text-2xl mt-3">Ridho Rifai</h1>

        <form className="flex-col flex w-[100%] items-center justify-center max-[450px]:mt-10">
          <div className="flex flex-col w-[50%] max-[450px]:w-[80%]">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border border-third rounded mb-4 mt-1 px-4 py-2"
            />
          </div>
          <div className="flex flex-col w-[50%] max-[450px]:w-[80%]">
            <label className="text-sm">Nama Depan</label>
            <input
              type="text"
              placeholder="Nama depan"
              className="border border-third rounded mb-4 mt-1 px-4 py-2"
            />
          </div>
          <div className="flex flex-col w-[50%] max-[450px]:w-[80%]">
            <label className="text-sm">Nama Belakang</label>
            <input
              type="text"
              placeholder="Nama belakang"
              className="border border-third rounded mb-4 mt-1 py-2 px-4"
            />
          </div>

          <Link
            to={"/"}
            className="bg-primary text-center text-[white] rounded w-[50%] max-[450px]:w-[80%] py-2 mt-3"
          >
            Edit Profil
          </Link>
          <Link
            to={"/login"}
            className="bg-[white] border-primary border rounded text-center text-primary w-[50%] max-[450px]:w-[80%] py-2 mt-5"
          >
            Logout
          </Link>
          <button className="bg-primary hidden text-[white] rounded w-[50%] py-2 mt-5">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Akun;
