import React, { useState } from "react";
import axios from "axios";
import { illustrasiLogin } from "../assets";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState();

  const handleLoginSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      alert("Login successful");
      setRedirect(true);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex w-full lg:h-[100vh]">
      <div className="flex-col flex px-[15%] w-[60%] max-[450px]:w-[100%] max-[450px]:mx-[0] max-[450px]:px-[0] self-center max-[800px]:mt-[20vh]">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-[30x] h-[30px]" />
          <h1 className="font-semibold text-lg mx-2 text-center ">SIMS PPOB</h1>
        </div>
        <p className="font-semibold text-2xl my-4 mt-6 text-center">
          Masuk atau buat akun <br /> untuk memulai
        </p>
        <form onSubmit={handleLoginSubmit} className="flex-col flex my-3">
          <input
            type="email"
            placeholder="masukkan email anda"
            className="border border-third rounded my-3 px-2 py-1"
            required
            minLength={4}
            maxLength={20}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="masukkan password anda"
            className="border border-third rounded my-3 px-2 py-1"
            required
            minLength={8}
            maxLength={30}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <Link
            to={"/"}
            className="bg-primary text-center mt-5 py-1 text-[white] rounded"
          >
            Masuk
          </Link>
        </form>
        <p className="text-inherit text-xs text-center">
          belum punya akun? registrasi{" "}
          <Link to={"/registrasi"} className="text-primary">
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

export default Login;
