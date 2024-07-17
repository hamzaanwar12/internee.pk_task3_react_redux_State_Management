import { useState } from "react"
import { quotesActions } from "../store/store"
import { useDispatch } from "react-redux"
import "./CommentForm.css"

const CommentForm = (props)=>
{
    const dispatch = useDispatch()
    const [value,setValue] = useState("")

    const changehandler = (event)=>
    {
        // console.log(event.target.value)
        // setValue(event.target.value)
        console.log(event.target.textContent)
        setValue(event.target.textContent)
    }
    const commentSubmission=()=>
    {
        dispatch(quotesActions.addComment({
            id:parseInt( props.id),
            comment:value
            }))
         props.toggleForm()

    }
    return(
        <div className="writeComment">
            <div className="edit" onInput={changehandler} value = {value} contentEditable>  </div>
            {/* <div className="edit" onBlur={changehandler} contentEditable> {value} </div> */}
            <button className="add comment" onClick={commentSubmission}>Submit Comment</button>
        </div>
    )
}
export default CommentForm