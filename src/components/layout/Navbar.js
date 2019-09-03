import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
// import {} from ''
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

const mapStateToProps = state => {
    console.log(state)
    return {

    }
}
 
export default connect(mapStateToProps)(Navbar);