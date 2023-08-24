import {
  Login,
  Homepage,
  Akun,
  Transactions,
  Topup,
  Registrasi,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="registrasi" element={<Registrasi />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="top-up" element={<Topup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
