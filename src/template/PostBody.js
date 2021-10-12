import useFetch from "./useFetch";

const PostBody = ({blog ,id}) => {
    const author = useFetch(`http://localhost:2020/author/${blog.authorId}`);
    return (  

        <section className="post">
            <section className="main-content">
                <div className="tmp-post">
                    <header>
                        <div className="thumbnail">
                            <img src={blog.img} alt={id} />
                            <div className="cat-tag">
                                {blog.category}
                            </div>
                        </div>
                        <h1 className="title">{blog.title}</h1>
                        <div className="detail-info">
                            <h3 className="date">{blog.date}</h3>
                            <span className="detail-seprator"></span>
                            <h3 className="author">{author && author.name}</h3>
                        </div>
                    </header>

                    <section className="text">
                        <p><span className="text-space"></span>{blog.text} 
                        </p>
                    </section>
                </div>
            </section>
            
            <section className="side-content">
                <h2 className="title">Author Info</h2>
                <div className="text">
                    <p>{author && author.info}
                    </p>
                </div>
            </section>
        </section>

 
    );
}
 
export default PostBody;