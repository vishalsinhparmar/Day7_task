import { NavLink } from "react-router-dom";

const NavbarApp = ()=>{
     return (
        <>
            <header className=""> 
                <nav className="flex justify-between items-center text-2xl"> 

                    <div className="py-4">
                         <NavLink to='/'><h3 className="text-5xl font-extrabold ">BlogApp</h3></NavLink>
                    </div>
                      <ul className="flex items-center font-bold text-lg">

                           <li className="list-none p-4 ">
                            <NavLink to='/home' className={({isActive})=> isActive ?"text-green-500 border-b-2 border-green-500":"" }  end >HOME</NavLink>
                            </li>
                            <li className="list-none p-4">
                            <NavLink to='/about' className={({isActive})=> isActive ? "text-green-500 border-b-2 border-green-500":"" } >ABOUT</NavLink>
                            </li>

                            <li className="list-none p-4">
                            <NavLink to='/blog' className={({isActive})=> isActive ? "text-green-500 border-b-2 border-green-500":"" } >BLOGLIST</NavLink>
                            </li>

                            <li className="list-none p-4">
                            <NavLink to='/contact' className={({isActive})=> isActive ?"text-green-500 border-b-2 border-green-500":"" } >CONTACT</NavLink>
                            </li>
                      </ul>
                </nav>
            </header>
        </>
     )
};

export default NavbarApp;