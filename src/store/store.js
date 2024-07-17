import { createSlice,configureStore } from "@reduxjs/toolkit"

const initialState = {
    quotes:
    [{
        id: 0,
        // quoteText: "This is Bakwaaas",
        quoteText: "This is Chawal",
        writer: "Choti Chawla",
        comments:[]
    },
    {
        id: 1,
        // quoteText: "This is Bakwaaas # 2",
        quoteText: "This is Chawal # 2",
        writer: "Baari Chawla",
        comments:[]
    }],
    specialQuote: null
}

const Quotes = createSlice({
    name: "Quotes",
    initialState,
    reducers:{
        addQuote(state,action)
        {
            console.log("Inside Quotes")
            

            state.quotes.push({
                id:state.quotes.length,
                quoteText: action.payload.quoteText,
                writer: action.payload.writer,
                comments:[]
            })
            console.log(action.payload)
            console.log(state.quotes)
        },
        findQuote(state,action)
        {

            state.specialQuote =  state.quotes[action.payload]  
        },
        addComment(state,action)
        {
            console.log(state.quotes[parseInt(action.payload.id)].comments)
            state.quotes[parseInt(action.payload.id)].comments.unshift(action.payload.comment);

        }
    }
})

const quotesActions = Quotes.actions
const store = configureStore({
    reducer:Quotes.reducer
})


export default store
export {quotesActions}