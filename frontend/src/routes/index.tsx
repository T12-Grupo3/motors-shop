import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/home";
import Product from "../pages/product";
import ProfileView from "../pages/ProfileView";
import Register from "../pages/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate replace to={"home"} />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/profileview" element={<ProfileView />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
