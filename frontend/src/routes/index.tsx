import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate replace to={"home"} />} />
    </Routes>
  );
};

export default MainRoutes;
