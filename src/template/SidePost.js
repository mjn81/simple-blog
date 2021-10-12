const SidePost = ({post}) => {
    return ( 
        <li key={post.id}>
        <article className="tmp-post"> 
            <div className="thumbnail">
                    <img src={post.img} alt={post.id} />
                    <div className="cat-tag">
                        {post.category}
                    </div>
                </div>
            <section>
                <h1 className="title">{post.title}</h1>
                <h3 className="date">{post.date}</h3>
                <footer className="footer">
                    <a href={`/blogs/${post.id}`}>Read Article &#8594;</a>
                </footer>
            </section>  
        </article>
    </li> 
     );
}
 
export default SidePost;