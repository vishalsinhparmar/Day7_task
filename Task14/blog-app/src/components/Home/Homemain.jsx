import homeimage from '../../../public/images/home-bg.jpg'
const Homemain = ()=>{
     return (
        <>
        <section>
                  <div className='flex items-center justify-items-center w-full h-[80vh] relative mb-5'>
                                           <div className='absolute inset-0'>
                                             <img src={homeimage} alt="aboutimg" className='w-full h-full object-cover'/>
                                             <div className=' absolute z-20 inset-0 bg-black opacity-50 '></div>
                                          </div>
                                          <div className='relative z-40 text-white  mx-auto'>
                                               <h1 className='text-7xl font-bold pb-3'>Clean Blog</h1>
                                               <p className='text-3xl text-center'>A Blog Theme by Start Bootstrap</p>
                                          </div>
                                    </div>
           </section>
        </>
     )
};

export default Homemain;