import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto px-5">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
