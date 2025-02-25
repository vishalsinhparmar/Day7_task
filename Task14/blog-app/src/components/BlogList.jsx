import BlogMain from "./Blogpost/BlogMain";

const BlogList = ()=>{
     return (
        <>
           <BlogMain/>
           <BlogList/>
        </>
     )
};

export default BlogList;