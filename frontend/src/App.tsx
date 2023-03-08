import Global from "./style/Global";

import MainRoutes from "./routes";
import AdvertProvider from "./Context/AdvertContext";
import UserProvider from "./Context/UserContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <UserProvider>
        <AdvertProvider>
          <Global />
          <ScrollToTop />
          <MainRoutes />
        </AdvertProvider>
      </UserProvider>
    </>
  );
}

export default App;
