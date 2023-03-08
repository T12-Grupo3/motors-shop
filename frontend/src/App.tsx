import Global from "./style/Global";

import MainRoutes from "./routes";
import AdvertProvider from "./Context/AdvertContext";
import UserProvider from "./Context/UserContext";
import ScrollToTop from "./components/ScrollToTop";
import "react-toastify/dist/ReactToastify.min.css"
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <>
      <UserProvider>
        <AdvertProvider>
          <ToastContainer />
          <Global />
          <ScrollToTop />
          <MainRoutes />
        </AdvertProvider>
      </UserProvider>
    </>
  );
}

export default App;
