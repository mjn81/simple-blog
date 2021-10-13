import Comment from './Comment';
import { useCallback, useState } from 'react';
const postReply = async(data )=>{
   
    await fetch('http://localhost:2020/comments' , 
    {
        method:'POST' ,
        mode : 'cors', 
        headers : {
            'Content-Type': 'application/json' 
        },
        redirect : 'follow', 
        body:JSON.stringify(data)
    });
}



const Comments = ({comments , id}) => {
    const [text , setText] = useState("");
    const [author , setAuthor] = useState("");
    const [email , setEmail] = useState("");
    const [title , setTitle] = useState("");
    const comment = comments.filter(item=>item.postId == id);
    comment.reverse();
    return (  
        <section class="comments">
        <h2 class="title">Post a Reply</h2>
        <section class="reply-form"> 
            <div class="left-sec">
                <textarea name="text-comment" rows="12" placeholder="Comment" onChange={e=>{setText(e.target.value)}}></textarea>
            </div>
            <div class="right-sec">
                <input type="text" name="title" placeholder="Title *" required onChange={e=>(setTitle(e.target.value))} />
                <input type="text" name="name" placeholder="Name *" required onChange={e=>(setAuthor(e.target.value))} />
                <input type="email" name="email" placeholder="Email *" required onChange={e=>(setEmail(e.target.value))} />
                <button class="btn" onClick={ ()=>{
                    postReply({text  , author , email  , title, postId:id})
                    .then(()=>{
                       // TODO : add a Hook to make it refresh
                    })
                    }
                }>Post Reply</button>
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