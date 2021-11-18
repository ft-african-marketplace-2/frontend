import { Link } from "react-router-dom";
import { useState } from "react";
 
const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link> 
                <Link to="/view">Market</Link>
            </nav>
        </div>
    );
};

export default Header;