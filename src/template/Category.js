
import useFetch from "./useFetch";
import CategoryList from "./CategoryList";
const Category = () => {
    const blogs = useFetch('http://localhost:2020/blogs');

    return (  
        <main className="tmp-body">  
            
            {blogs && <CategoryList blogs={blogs} />}
        
        </main>


    );
}
 
export default Category;