import "./Quote.css"
import {useNavigate} from "react-router-dom"

const Quote = (props)=>
{
    const navigate = useNavigate()
    
    const detailHandler = (event)=>
    {
        navigate(`/allQuotes/:${props.id}`)
    }
    return(
        <div className="quote">
            <div className="title">
                <h2>{props.text}</h2>
                <span>{props.writer}</span>
            </div>
            <button onClick={detailHandler}>View Full Screen</button>
        </div>
    );
}

export default Quote
