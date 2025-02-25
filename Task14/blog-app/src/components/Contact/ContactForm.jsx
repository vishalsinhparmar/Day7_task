const Contactform = ()=>{
     return (
        <>
           <section className="flex justify-center items-center my-10">
                 <div className="w-1/2 p-4">
                       <div className="w-full text-center mx-auto  text-black">
                             <p className="text-2xl py-4"> Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                       </div>

                       <div>
                            <form className="flex items-center flex-col w-100%">
                                 <input type="text" 
                                  placeholder="Name"
                                  className=" border  border-b-black p-4 w-full placeholder:text-2xl placeholder:text-black my-4"
                                 />
                               
                                  <input type="text" 
                                  placeholder="Email address"
                                  className=" border  border-b-black p-4 w-full placeholder:text-2xl placeholder:text-black my-4"
                                 />
                                  <input type="text" 
                                  placeholder="Phone Number"
                                  className=" border  border-b-black p-4 w-full placeholder:text-2xl placeholder:text-black my-4"
                                 />

                                 <button className="bg-cyan-500 border-none w-24 cursor-pointer  p-3 font-bold text-white my-4">SEND</button>
                            </form>
                       </div>
                 </div>
           </section>
        </>
     )
};

export default Contactform;