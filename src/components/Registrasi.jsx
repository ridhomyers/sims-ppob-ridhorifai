import React, { useState } from "react";
import axios from "axios";
import { illustrasiLogin } from "../assets";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Registrasi = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (ev) => {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        firstName,
        lastName,
        email,
        password,
      });
      alert("Registration successful. Now you can log in");
    } catch (err) {
      console.log(err);
      alert("Registration failed. Please try again later");
    }
  };

  return (
    <div className="flex w-full lg:h-[100vh]">
      <div className="flex-col flex px-[15%] w-[60%] max-[450px]:w-[100%] max-[450px]:mx-[0] max-[450px]:px-[0] max-[800px]:mt-[13vh] self-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-[30x] h-[30px]" />
          <h1 className="font-semibold text-lg mx-2 text-center ">SIMS PPOB</h1>
        </div>
        <p className="font-semibold text-2xl my-4 mt-6 text-center">
          Lengkapi data untuk
          <br />
          membuat akun
        </p>
        <form className="flex-col flex my-3" onSubmit={registerUser}>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border border-third rounded my-3 px-2 py-1"
            required
            minLength={4}
            maxLength={20}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="text"
            placeholder="nama depan"
            className="border border-third rounded my-3 px-2 py-1"
            required
            minLength={1}
            maxLength={15}
            value={firstName}
            onChange={(ev) => setFirstName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="nama belakang"
            className="border border-third rounded my-3 px-2 py-1"
            required
            minLength={1}
            maxLength={15}
            value={lastName}
            onChange={(ev) => setLastName(ev.target.value)}
          />
          <input
            type="password"
            placeholder="buat password"
            className="border border-third rounded my-3 px-2 py-1"
            required
            minLength={8}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <input
            type="password"
            placeholder="konfirmasi password"
            className="border border-third rounded my-3 px-2 py-1"
            required
            minLength={8}
          />
          <Link
            to={"/login"}
            className="bg-primary mt-5 py-1 text-center text-[white] rounded"
          >
            Registrasi
          </Link>
        </form>
        <p className="text-inherit text-xs text-center">
          sudah punya akun? login
          <Link to={"/login"} className="text-primary">
            {" "}
            di sini
          </Link>
        </p>
      </div>
      <div className="justify-end">
        <div className="justify-end mx-0 px-0 max-[450px]:hidden">
          <img src={illustrasiLogin} alt="Image Login" className="h-[100vh]" />
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
