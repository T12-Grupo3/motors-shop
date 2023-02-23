import NavBar from "./components/NavBar";
import MainRoutes from "./routes";
import Global from "./style/Global";
import Home from "./pages/home/index";

const App = () => {
  return (
    <>
      <Global />
      <MainRoutes />
    </>
  );
};

export default App;
