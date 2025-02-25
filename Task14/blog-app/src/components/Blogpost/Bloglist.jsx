import { useEffect, useState } from "react";

const Bloglist = ()=>{
     const [blog,setBlog] = useState([]);
     console.log('blog',blog)
     const [loading,setLoading] = useState(true)

     const fetchBloglist  = async()=>{
          try{
             const res = await fetch('https://jsonplaceholder.typicode.com/posts');
             console.log("res",res)
             const data = await res.json();
             console.log('data of blog',data)

             if(data){               
                setLoading(false);
                 setBlog(data);
             }

          }catch(err){
             console.log("error happen in the fetchblog",err.message)
             setLoading(true)
          }
     }

     useEffect(()=>{
        fetchBloglist();
     },[])
     return (
        <>
            <section className="bg-lime-50">
                  <h1 className="text-4xl text-center font-medium">Blogs</h1>
                 {
                    loading ? (
                        <>
                           <p>Loding....</p>
                        </>
                    ):(
                        <div className="flex flex-col w-1/2 justify-center mx-auto p-4">
                        {
                         !loading && blog.length >0 ? (

                            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-lime-500">
                            {
                                blog.map((blog,index)=>(
                                    <div key={index} className="border-b-2 border-b-amber-400">
                            <h1 className="text-3xl font-bold underline">Title:{blog.title}</h1>
                            <p className="py-4 text-xl">paragraph{blog.body}</p>
                            <button className="bg-cyan-500 border-none w-48 cursor-pointer text-white   p-4 font-bold my-4">Read More</button>
                                </div>
                                ))

}
                            </div>
                            
                         ):(
                            <p>no blog found</p>
                         )
                       
}
                        
                       </div>
                    )
                 }
             

            </section>
        </>
     )
};

export default Bloglist;