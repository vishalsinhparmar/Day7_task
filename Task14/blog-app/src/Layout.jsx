import { Outlet } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import Footer from "./components/Footer";

const Layout = ()=>{
   return (
    <>
        <div>
         <NavbarApp/>
            <main>
                 <Outlet/>
            </main>
          <Footer/>
        </div>
    </>
   )
};

export default Layout;