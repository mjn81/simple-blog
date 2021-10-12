const Blog = ({blog}) => {
    return (
        <article className="tmp-post" key={blog.id}>
            <header>
                <div className="thumbnail">
                    <img src={blog.img} alt={blog.id} />
                    <div className="cat-tag">
                        {blog.category}
                    </div>
                </div>
        
                <h3 className="date">{blog.date} </h3>
                <h1 className="title">{blog.title}</h1>
            </header>  
            <section className="summary">
                <p>{blog.summary}...
                </p>
            </section>
            <footer className="footer">
                <a href={`/blogs/${blog.id}`}>Read Article &#8594;</a>
            </footer>
            
     </article>
      );
}
 
export default Blog;