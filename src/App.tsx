import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
