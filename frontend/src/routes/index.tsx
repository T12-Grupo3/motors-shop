import {Routes, Route} from "react-router-dom"
import Home from "../pages/home"
import Product from "../pages/product"





function RoutesMain() {
  // const {users, setUsers, onSubmitLogin, navigate, onSubmitRegister } = useContext(allContext) 


  return (
    <Routes>
      <Route path="/home" element={ <Home/> } />
      <Route path="/product" element={ <Product /> } />
      </Routes>
  );
}

export default RoutesMain;
