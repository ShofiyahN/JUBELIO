import Home from "..";
import Products from "../pages/produk";
import { Routes, Route } from "react-router-dom";
import IndexHome from "../pages/home";
import Katalog from "../pages/produk/katalog";
import Persediaan from "../pages/produk/persediaan";
import Pesanan from "../pages/produk/pesanan";
import Gudang from "../pages/produk/Gudang";
import IntelegensiBisnis from "../pages/produk/Intelegensibisnis";
import Pembukuan from "../pages/produk/pembukuaan/pembukuan";

export default function RouteApp() {
    return (
        <Routes >
            <Route exact path="/" element={<IndexHome />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/katalog" element={<Katalog />} />
            <Route path="/product/persediaan" element={<Persediaan />} />
            <Route path="/product/pesanan" element={<Pesanan />} />
            <Route path="/product/gudang" element={<Gudang />} />
            <Route path="/product/intelegensi-bisnis" element={<IntelegensiBisnis />} />
            <Route path="/product/pembukuan" element={<Pembukuan />} />

        </Routes>
    );
}
