import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
         
            <input type="text" className="search-bar" />
            <button className="search-btn">Search</button>
        </nav>
    );
};

export default Header;