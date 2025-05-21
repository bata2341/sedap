import Footer from "../pages/guest/Footer";
import { Outlet } from "react-router-dom";


const GuestLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">

            {/* saya tidak memiliki header, karena sudah digabung
            pada gues.jsx */}

            <main className="flex-grow">{children}</main>
            <Outlet />
            <Footer />
        </div>
    );
};

export default GuestLayout;