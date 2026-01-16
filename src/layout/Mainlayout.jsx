import { Outlet } from "react-router-dom";
import Navbar from "../components/Navber";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default MainLayout;
