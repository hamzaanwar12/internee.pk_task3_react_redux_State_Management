import "./QuoteForm.css"
import { useState } from "react"
import { quotesActions } from "../store/store"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const QuoteForm = ()=>
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [author,setAuthor] = useState("")
    const [quoteText,setQuoteText] = useState("")

    
    const submitHandler = event =>
    {
        event.preventDefault();
        dispatch(quotesActions.addQuote({
            quoteText: quoteText,
            writer: author
        }))
        navigate("/allQuotes")
    }
    const authorChangeHandler = event => setAuthor(event.target.value)
    const quoteTextHandler = event => setQuoteText(event.target.value)


    return (
        <form onSubmit={submitHandler}>
            <h2>Author</h2>
            <input type="text" value = {author} onChange={authorChangeHandler}/>
            <h2>Text</h2>
            <textarea value = {quoteText} onChange={quoteTextHandler}/>
            <div className="button">
                <button type="submit" className="add">Add Quote</button>
            </div>
        </form>
    )
}

export  default QuoteForm