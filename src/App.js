import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import AboutUser from "./pages/AboutUser/AboutUser";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about-user" element={<AboutUser />} />
      </Routes>
    </div>
  );
}

export default App;
