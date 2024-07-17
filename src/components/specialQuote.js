import "./specialQuote.css"
// import { Routes,Route, useNavigate } from "react-router-dom"
import { quotesActions } from "../store/store"
import { useDispatch } from "react-redux"
import { useParams} from "react-router-dom"
import { useSelector} from "react-redux";
import Comments  from "./Comments"
import { useState } from "react";

const SpecialQuote = ()=>
{
    const [comments,setComments] = useState(false)
    // const navigate = useNavigate()
    const userId = useParams()
    const dispatch = useDispatch()
    const quote = useSelector(state=>state.specialQuote)

    const commentsLoadHandler = ()=>{
        // navigate(`/allQuotes/${userId.quoteId}/comments`)
        setComments(prevComments=>!prevComments)
    }


    dispatch(quotesActions.findQuote(parseInt(userId.quoteId.substring(1))))
    // console.log("userId.quoteId.substring()")
    // console.log(userId.quoteId.substring(1))
    
    /*
    const quote = dispatch(quotesActions.findQuote(parseInt(userId.quoteId.substring(1))))
    console.log("quote")
    console.log(quote)
    */

    return(
        <>
            <div className="specialQuote">
                <div className="special">
                    
                    <div className="additional">
                        <div className="upper">
                            <h1>{quote.quoteText}</h1>
                        </div>
                        <div className="writer">
                            <h3>{quote.writer}</h3>
                        </div>
                    </div>

                    <div className="but">
                        <button className="add" onClick={commentsLoadHandler}>Load Comments</button>
                        {/* <Link className="add" to={`/allQuotes/${userId.quoteId}/comments`}>Load Comments</Link> */}
                    </div>
                </div>
            </div>
            {comments && <Comments id = {userId.quoteId.substring(1)} toggleComment = {commentsLoadHandler}/>}               
        </>
    )

}


export default SpecialQuote