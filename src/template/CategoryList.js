import { useParams } from "react-router";
import { useEffect } from "react";
import Blog from './Blog';
import {navClick} from 'ClickFunction';


const CategoryList = ({blogs}) => {
    const {tag} = useParams();
    const filtered= (tag=="All") ? blogs : blogs.filter(item=>item.category == tag);
    useEffect(()=>{setTimeout(()=>{navClicked(tag);} ,10)} , [tag]); // change the type of hook

    return ( 
        <section className="blog-list">
            <section className="recent-post category-type"> 
                <h1 className="sec-title">{tag}</h1>
                <section className="posts">
                    {filtered.map(item=><Blog blog={item} />)}               
                </section>
                <button className="btn btn-m-0">Load More</button>
            </section>

        </section>
   
     );
}
export default CategoryList;
