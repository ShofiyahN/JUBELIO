import Home from "..";
import Products from "../produk";
import { Routes, Route } from "react-router-dom";

export default function RouteApp() {
    return (
        <Routes >
            <Route exact path="/" element={<Home />} />
            <Route path="/men" element={<Products />} />

        </Routes>
    );
}
