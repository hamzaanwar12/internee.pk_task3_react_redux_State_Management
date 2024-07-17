import Navbar from "./components/Navbar";
import AllQuotes from "./components/AllQuotes";
import QuoteForm from "./components/QuoteForm";
import { Route, Routes } from "react-router-dom"
import SpecialQuote from "./components/specialQuote"
// import { Switch } from "react-router-dom"

function App() {

  return (

    <Navbar>
      <Routes>

        <Route exact path="/" element= {<AllQuotes />}/>
        <Route path="/allQuotes" element= {<AllQuotes />}/>
        <Route path="/addQuote" element= {<QuoteForm />}/>
        <Route path="/allQuotes/:quoteId" element= {<SpecialQuote />}/>
      </Routes>
    </Navbar>
  );

}

export default App;
