import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import IndexPage from "./Pages/IndexPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import { UserContextProvider } from "./userContext/UserContext";
import AccountPage from "./Pages/AccountPage";
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account/:subpage?" element={<AccountPage />} />
            <Route path="/account/:subpage/:action" element={<AccountPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
