import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
