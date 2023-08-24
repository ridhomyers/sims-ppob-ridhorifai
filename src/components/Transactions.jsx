import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { transaksi } from "../constant";

const Transactions = () => {
  return (
    <div className="pb-10">
      <Navbar />
      <Hero />
      <div className="mt-12">
        <h1 className="font-semibold text-md my-4">Semua Transaksi</h1>
        {transaksi.map((transaksi, index) => {
          return (
            <div
              key={index}
              className="w-full flex justify-between px-5 my-5 py-1.5 border border-third rounded"
            >
              <div className="text-center">
                <h1 className="font-semibold text-[mediumaquamarine]">
                  {transaksi.nominal}
                </h1>
                <p className="text-xs">{transaksi.tanggal}</p>
              </div>{" "}
              <div className="mt-2.5 text-sm">{transaksi.keterangan}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
