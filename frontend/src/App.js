import Cart from "./components/Cart";
import useAlan from "./hooks/useAlan";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import Categories from "./components/Categories";
import MalesStore from "./components/MalesStore";
import FemalesStore from "./components/FemalesStore";
import Login from "./components/login";
import { UserProvider } from "./context/useUser";
import Account from "./components/account";

function App() {
  useAlan();

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/males" element={<MalesStore />} />
          <Route path="/females" element={<FemalesStore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Cart />
      </Router>
    </UserProvider>
  );
}

export default App;
