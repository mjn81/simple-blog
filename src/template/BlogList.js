import Blog from "./Blog";
const BlogList = ({blogs}) => {
    const recent = blogs.at(0);
    let revblogs = blogs.filter(item =>item.id !== recent.id);
    return ( 
        <section className="recent-post"> 
            <h1 className="sec-title">most recent</h1>
            
            <Blog blog={recent} />

            <section className="posts">
               {
                   revblogs.map(blog=>(
                       <Blog blog={blog} />
                   ))
               }
            </section>
            
            <button className="btn btn-m-0">Load More</button>
        </section>
     );
}
 
export default BlogList;