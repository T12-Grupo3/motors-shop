import Global from "./style/Global";

import MainRoutes from "./routes";
import AuthProvider from "./Context/AuthProvider";

function App() {


  return (
    <>
      <AuthProvider>
        <Global />
        <MainRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
