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
import Harga from "../pages/harga";
import Ambassador from "../pages/Ambassador";
import Affiliasi from "../pages/Affiliasi";
import IntegrasiAPI from "../pages/dukungan/integrasiAPI";
import Partner from "../pages/partner";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Platform from "../pages/produk/platform";
import Pos from "../pages/produk/pos";

export default function RouteApp() {
    return (
        <Routes >
            <Route exact path="/" element={<IndexHome />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/product/katalog" element={<Katalog />} />
            <Route path="/product" element={<Products />} />
            <Route path="/harga" element={<Harga />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/affiliasi/ambassador" element={<Ambassador />} />
            <Route path="/dukungan/integrasiapi" element={<IntegrasiAPI />} />
            <Route path="/affiliasi/affiliasi" element={<Affiliasi />} />
            <Route path="/product/persediaan" element={<Persediaan />} />
            <Route path="/product/pesanan" element={<Pesanan />} />
            <Route path="/product/gudang" element={<Gudang />} />
            <Route path="/product/intelegensi-bisnis" element={<IntelegensiBisnis />} />
            <Route path="/product/pembukuan" element={<Pembukuan />} />
            <Route path="/product/platform" element={<Platform />} />
            <Route path="/product/pos" element={<Pos />} />

        </Routes>
    );
}
