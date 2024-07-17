import { useState } from "react"
import "./Comments.css"
import { useSelector } from "react-redux"
import CommentForm from "./CommentForm"

const Comments = (props)=>
{
    const [commentform,setCommentform] = useState(false)
    const comments = useSelector(state=>state.quotes[parseInt(props.id)].comments)
    console.log("comments")
    console.log(comments)
    // const addCommentHandler = ()=>setCommentform(true)

    const toggleComment = ()=>setCommentform(prevComment=>!prevComment)

    let commentlist
    if(comments.length === 0)
        commentlist = <h3>No Comments are Gien yet</h3>
    else
    {
        commentlist = Array.from(comments).map(element=>
                                                    <div className="commentEntered">
                                                        <h1>{element}</h1>
                                                    </div>)
    }



    return(
        <div className="detailComments">
            <h2>User Comments</h2>
            {comments.length?<div className="list">{commentlist}</div> :<span>No Comments are given yet</span>}
            {commentform && <CommentForm id={props.id} toggleForm={toggleComment}/>}
            <button className="add comment" onClick={toggleComment}>{!comments.length?"Add Comment":"Another Comment"}</button>
        </div>
    )
}

export default Comments