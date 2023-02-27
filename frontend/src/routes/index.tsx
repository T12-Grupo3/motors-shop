import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/home";
import Product from "../pages/product"
import ProfileView from "../pages/ProfileView";

const MainRoutes = () => {
  return( 
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<Navigate replace to={"home"} />} />
    <Route path="/product/:id" element={ <Product /> } />
    <Route path="/profileview" element={<ProfileView />} />

  </Routes>
  )
};

export default MainRoutes;
