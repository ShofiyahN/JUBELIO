import Home from "..";
import Products from "../produk";
import { Routes, Route } from "react-router-dom";
import Brands from "../Brand/Brands";

export default function RouteApp() {
    return (
        <Routes >
            <Route exact path="/" element={<Home />} />
            <Route path="/men" element={<Products />} />
            <Route path="/brands" element={<Brands />} />

        </Routes>
    );
}
