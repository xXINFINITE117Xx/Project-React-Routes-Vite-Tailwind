import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Layouts/Header/Header";
import { Navbar } from "./Components/Layouts/Navbar/Navbar";
import { NotFound } from "./Components/NotFound/NotFound";
import { AboutMe } from "./Components/Pages/AboutMe/AboutMe";
import { ContactMe } from "./Components/Pages/ContactMe/ContactMe";
import { Home } from "./Components/Pages/Home/Home";
import { Portfolio } from "./Components/Pages/Portfiolio/Portfolio";

function App() {
  return (
    <>
      <Header>
        <h1 className="w-1/4 ml-12 text-5xl font-extrabold text-sky-400">
          David dev
        </h1>
        <Navbar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
