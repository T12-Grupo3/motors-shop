import Global from "./style/Global";

import MainRoutes from "./routes";
import AdvertProvider from "./Context/AdvertContext";

function App() {
  return (
    <>
      <AdvertProvider>
        <Global />
        <MainRoutes />
      </AdvertProvider>
    </>
  );
}

export default App;
