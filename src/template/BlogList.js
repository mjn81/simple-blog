import Blog from "./Blog";
const BlogList = ({blogs , recent}) => {
    const newBlog = blogs.reverse;
    return ( 
        <section className="recent-post"> 
            <h1 className="sec-title">most recent</h1>
            
            <Blog blog={recent} />

            <section className="posts">
               {
                   blogs.map(blog=>(
                       <Blog blog={newBlog} />
                   ))
               }
            </section>
            
            <a className="btn btn-m-0">Load More</a>
        </section>
     );
}
 
export default BlogList;