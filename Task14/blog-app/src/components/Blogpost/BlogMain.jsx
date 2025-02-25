import blogimage from '/images/post-sample-image.jpg'
const BlogMain = ()=>{
     return (
        
         <div className='flex items-center justify-items-center w-full h-[80vh] relative'>
                                                   <div className='absolute inset-0'>
                                                     <img src={blogimage} alt="aboutimg" className='w-full h-full object-cover'/>
                                                     <div className=' absolute z-20 inset-0 bg-black opacity-50 '></div>
                                                  </div>
                                                  <div className='relative z-40 text-white  mx-auto'>
                                                       <h1 className='text-7xl font-bold'>Man must explore, and this is exploration at its greatest</h1>
                                                       <p className='text-3xl'>Problems look mighty small from 150 miles up</p>
                                                       <p className='text-3xl'>Posted by Start Bootstrap on August 24, 2023</p>

                                                  </div>
                                            </div>


     )
};

export default BlogMain