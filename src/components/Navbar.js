import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <>
                <nav className="h-20 items-center font-serif text-xl italic font-semibold">
            <h1 className="appName">Great Quotes</h1>
            <div className="specs">
                <ul>
                    <li><NavLink activeClassName="check" className="li" to="/allQuotes">All Quotes</NavLink></li>
                    <li><NavLink activeClassName="selected" className="li" to="/addQuote">Add Quote</NavLink></li>
                </ul>
            </div>
        </nav>
        <main>{props.children}</main>
        </>
    );
}

export default Navbar