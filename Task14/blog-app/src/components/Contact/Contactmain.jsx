import contactimg from '/images/contact-bg.jpg'
const Contactmain = ()=>{
     return(
        <>
           <section>
                  <div className='flex items-center justify-items-center w-full h-[80vh] relative'>
                                           <div className='absolute inset-0'>
                                             <img src={contactimg} alt="aboutimg" className='w-full h-full object-cover'/>
                                             <div className=' absolute z-20 inset-0 bg-black opacity-50 '></div>
                                          </div>
                                          <div className='relative z-40 text-white  mx-auto'>
                                               <h1 className='text-8xl font-bold pb-2'>Contact Me</h1>
                                               <p className='text-3xl text-center'>Have questions? I have answers.</p>
                                          </div>
                                    </div>
           </section>
        </>
     )
};

export default Contactmain;