import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
