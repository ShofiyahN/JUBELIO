import { Route, Routes } from "react-router-dom"
import IndexHome from "../../views/pages/home"
import Pricing from "../../views/pages/pricing/pricing"

export function RouteApp () {
    return (
    <>
    <Routes>
        <Route path={'/'} element={<IndexHome/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
    </>
    )
}