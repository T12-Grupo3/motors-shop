import Global from "./style/Global";

import MainRoutes from "./routes";
import AdvertProvider from "./Context/AdvertContext";
import UserProvider from "./Context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <AdvertProvider>
          <Global />
          <MainRoutes />
        </AdvertProvider>
      </UserProvider>
    </>
  );
}

export default App;
