import Home from "..";
import Products from "../pages/produk";
import { Routes, Route } from "react-router-dom";
import IndexHome from "../pages/home";
import Harga from "../pages/harga";
import Partner from "../pages/partner";
import Affiliasi from "../pages/Affiliasi";
import Ambassador from "../pages/Ambassador";
import IntegrasiAPI from "../pages/dukungan/integrasiAPI";

export default function RouteApp() {
    return (
        <Routes >
            <Route exact path="/" element={<IndexHome />} />
            <Route path="/product" element={<Products />} />
            <Route path="/pricing" element={<Harga/>}/>
            <Route path="/partner" element={<Partner/>}/>
            <Route path="/affiliasi" element={<Affiliasi/>}/>
            <Route path="/Ambassador" element={<Ambassador/>}/>
            <Route path="/integrasiapi" element={<IntegrasiAPI/>}/>
        </Routes>
    );
}
