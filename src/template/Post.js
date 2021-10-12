import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import PostBody from "./PostBody";
import Comments from "./Comments";
const Post = () => {
    const params = useParams();
    const id = params.id;
    const blog = useFetch(`http://localhost:2020/blogs/${id}`);
    const comments = useFetch('http://localhost:2020/comments');
    return (  
       
        <div className="tmp-body">
        {
            blog && <PostBody blog={blog} id={id} />
        }

        {
            comments && <Comments comments={comments} id={id} />
        }
        </div>
    );
}
 
export default Post;