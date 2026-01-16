import { Routes, Route } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout"
import Home from "./pages/Home"
import About from "./pages/About";
import Protfilio from "./pages/Protfilio";
import Service from "./pages/Service";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <>
    <Routes>
      <Route

       path="/" element={<Mainlayout/>}>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/portfolio" element={<Protfilio/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />

      </Route>
    </Routes>
    </>
  )
}

export default App