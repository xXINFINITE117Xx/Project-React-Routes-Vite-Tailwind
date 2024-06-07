import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header.jsx";
import { Calculator } from "./Components/Pages/Calculator/Calculator";
import { Register } from "./Components/Pages/Register/Register.jsx";
import { Home } from "./Components/Pages/Home/Home.jsx";
import { Manager } from "./Components/Pages/Manager/Manager.jsx";
import { NavBar } from "./Components/Layouts/Navbar/Navbar.jsx";
import { RandomBackground } from "./Components/Pages/RamdonBackgrond/RamdonBackground.jsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/register" element={<Register />} />
        <Route path="/randombg" element={<RandomBackground />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </>
  );
}

export default App;
