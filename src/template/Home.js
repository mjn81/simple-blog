import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home = () => {
    const blogs = useFetch('http://localhost:2020/blogs'); 
    return ( 
         
        <main className="tmp-body">  
            
        <section className="blog-list">
          {
              blogs && <BlogList blogs={blogs} recent={blogs.pop()} />
          }
            





           <section className="side-area">
                <section className="featured-area">
                    <h1 className="sec-title">featured</h1>
                    <ul className="side-list">
                        <li>
                            <article className="tmp-post"> 
                                <div className="thumbnail">
                                        <img src="https://via.placeholder.com/900x700" alt="img1" />
                                        <div className="cat-tag">
                                            Business
                                        </div>
                                    </div>
                                <section>
                                    <h1 className="title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum dolor sit!</h1>
                                    <h3 className="date">NOV 23,2020 </h3>
                                    <footer className="footer">
                                        <a href="#">Read Article &#8594;</a>
                                    </footer>
                                </section>  
                            </article>
                        </li> 
                    </ul>
                </section>  
                <section className="featured-area">
                    <h1 className="sec-title">popular</h1>
                    <ul className="side-list">
                        <li>
                            <article className="tmp-post"> 
                                <div className="thumbnail">
                                        <img src="https://via.placeholder.com/900x700" alt="img1" />
                                        <div className="cat-tag">
                                            Business
                                        </div>
                                    </div>
                                <section>
                                    <h1 className="title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum dolor sit!</h1>
                                    <h3 className="date">NOV 23,2020 </h3>
                                    <footer className="footer">
                                        <a href="#">Read Article &#8594;</a>
                                    </footer>
                                </section>  
                            </article>
                        </li> 
                    </ul>
                </section>
            </section>
            
        </section>
       
        
        </main>
    );
}
 
export default Home;