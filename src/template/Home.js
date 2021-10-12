import useFetch from "./useFetch";
import BlogList from "./BlogList";
import SideContent from "./SideContent";
const Home = () => {
    const blogs = useFetch('http://localhost:2020/blogs'); 
    return ( 
         
        <main className="tmp-body">  
            
        <section className="blog-list">
            {
                blogs && <BlogList blogs={blogs} />
            }
                
            {
                blogs && <SideContent blogs={blogs} />
            }
            
        </section>
       
        
        </main>
    );
}
 
export default Home;