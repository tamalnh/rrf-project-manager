import React from 'react';
import { Link } from 'react-router-dom';
import {SingedinLinks, SignedoutLinks} from './'

const Navbar = () => {
    return ( 
        <nav className="nav-wrapper ">
            <div className="container">
                <Link to="/" className="brand-logo"> RRFPM </Link>
                <SingedinLinks />
                <SignedoutLinks />
            </div>
        </nav>
     );
}
 
export default Navbar;