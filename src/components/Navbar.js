import React from 'React';
import { Link } from 'React-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo"></Link>
                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/">My Cart</Link></li>
                    <li><Link to ="/"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;