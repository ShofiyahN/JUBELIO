import { TfiPackage } from "react-icons/tfi";
import { BsTags } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { VscReport } from "react-icons/vsc";
export const products = [
    {
        title: "Produk ",
        text: "Kelola produk master, bundle, dan arsip",
        icon: TfiPackage,
    },
    {
        title: "Harga ",
        text: "Atur harga default dan harga grosir",
        icon: BsTags
    },
    {
        title: "Promosi ",
        text: "Atur promosi atau potongan harga jual produk",
        icon: CiDiscount1
    },
    {
        title: "Kategori",
        text: "Atur mapping kategori produk di setiap channel",
        icon: AiOutlineAppstoreAdd,
    },
    {
        title: "Laporan",
        text: "Lihat laporan daftar produk, harga, dan aktivitas barang",
        icon: VscReport
    },
]