import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = ()=>{
     return (
        <>
           <footer className="w-full h-32 border-t-2  p-10">
                  <div className="flex justify-center items-center flex-col">

                     <div className="flex flex-row gap-6">
                            <div className="bg-black text-white rounded-full w-16 flex items-center justify-center p-4"> 
                               <FaFacebook className="text-3xl "/>
                             </div>

                            <div className="bg-black text-white rounded-full w-16 flex items-center justify-center p-4"> 
                               <FaTwitter className="text-3xl "/>
                            </div>

                             <div className="bg-black text-white rounded-full w-16 flex items-center justify-center p-4"> 
                               <FaGithub className="text-3xl "/>
                             </div>
                      </div>


                      <p className="text-2xl font-medium py-6">Copyright © Your Website 2023</p>
                  </div>

                  
           </footer>
        </>
     )
};

export default Footer;