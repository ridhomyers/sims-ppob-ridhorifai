import {
  pbb,
  listrik,
  pulsa,
  pdam,
  pgn,
  televisi,
  musik,
  game,
  voucherMakanan,
  kurban,
  zakat,
  paketData,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
} from "../assets";

const service = [
  {
    title: "PBB",
    icon: pbb,
  },
  {
    title: "Listrik",
    icon: listrik,
  },
  {
    title: "Pulsa",
    icon: pulsa,
  },
  {
    title: "PDAM",
    icon: pdam,
  },
  {
    title: "PGN",
    icon: pgn,
  },
  {
    title: "TV Langganan",
    icon: televisi,
  },
  {
    title: "Musik",
    icon: musik,
  },
  {
    title: "Voucher Game",
    icon: game,
  },
  {
    title: "Voucher Makanan",
    icon: voucherMakanan,
  },
  {
    title: "Kurban",
    icon: kurban,
  },
  {
    title: "Zakat",
    icon: zakat,
  },
  {
    title: "Paket Data",
    icon: paketData,
  },
];

const transaksi = [
  {
    nominal: "+ 10.000",
    tanggal: "23 Agustus 2023",
    keterangan: "Listrik",
  },
  {
    nominal: "+ 50.000",
    tanggal: "21 Agustus 2023",
    keterangan: "Air",
  },
  {
    nominal: "+ 20.000",
    tanggal: "27 Agustus 2023",
    keterangan: "PDAM",
  },
  {
    nominal: "+ 100.000",
    tanggal: "19 Agustus 2023",
    keterangan: "Paket Data",
  },
  {
    nominal: "+ 250.000",
    tanggal: "02 Agustus 2023",
    keterangan: "Zakat",
  },
];

const promo = [banner1, banner2, banner3, banner4, banner5];

const nominalTopup = [10.0, 20.0, 50.0, 100.0, 250.0, 500.0];

export { service, promo, nominalTopup, transaksi };
