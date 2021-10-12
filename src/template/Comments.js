import Comment from './Comment';
const Comments = ({comments , id}) => {
    const comment = comments.filter(item=>item.postId == id);
    return (  
        <section class="comments">
        <h2 class="title">Post a Reply</h2>
        <section class="reply-form"> 
            <div class="left-sec">
                <textarea name="text-comment" rows="8" placeholder="Comment"></textarea>
            </div>
            <div class="right-sec">
                <input type="text" name="name" placeholder="Name *" required /><input type="email" name="email" placeholder="Email *" required />
                <button class="btn" onClick={ }>Post Reply</button>
            </div>
        </section>
        <section class="comment-list">
            <h3 class="title">comments</h3>
            <ul>
                {
                    comment.map(item=>(
                        <Comment comment={item} />
                    ))
                }
            </ul>
        </section>
    </section>
    );
}
 
export default Comments;