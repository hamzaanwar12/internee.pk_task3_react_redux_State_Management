import "./AllQuotes.css"
import Quote from "./Quote"
import { useSelector } from "react-redux"
const AllQuotes = ()=>
{
    /*
    const quotes = [
        {
            id : 0,
            // quoteText: "This is Bakwaaas",
            quoteText: "This is Chawal",
            writer:"Choti Chawla"
        },
        {
            id : 1,
            // quoteText: "This is Bakwaaas # 2",
            quoteText: "This is Chawal # 2",
            writer:"Baari Chawla"
        }
    ]    
    */
    const quotes = useSelector(state=>state.quotes)
    console.log("quotes")

    const allQuotes = Array.from(quotes).map(element=> 
                        <Quote 
                            key = {element.id}
                            id = {element.id}
                            text = {element.quoteText}
                            writer = {element.writer}
                            />)

    return(
        <div className="allQuotes">
            {allQuotes}
        </div>
    )
}

export default AllQuotes