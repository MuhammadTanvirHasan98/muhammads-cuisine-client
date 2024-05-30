import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {/* Navbar */}
      <Navbar/>

      {/* Outlet */}
      <div className="min-h-[calc(100vh-600px)] max-w-[2400px] mx-auto">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
