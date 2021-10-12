const Comment = ({comment}) => {
    return (  
        <li key={comment.id}>
                    <div class="comment-header">
                        <h3>{comment.title}</h3><span class="nav-seprator"></span> <h4 class="author">{comment.author}</h4>
                    </div>
                    
                    <p>
                        {comment.text}
                    </p>
                   
        </li>
    );
}
 
export default Comment;