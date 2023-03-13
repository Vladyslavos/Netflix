import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import Signup from "./components/pages/Signup";
import ProtectedRoutes from "./components/protection/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
