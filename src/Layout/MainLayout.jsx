import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* NavBar */}
            <NavBar></NavBar>
            {/* Dinamic Section Here */}
            <div className="min-h-[calc(100vh-289px)]">
        <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;