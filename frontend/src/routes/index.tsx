import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/home";
import Product from "../pages/product"

const mainRoutes = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate replace to={"home"} />} />
    <Route path="/product" element={ <Product /> } />
  </Routes>;
};

export default mainRoutes;
