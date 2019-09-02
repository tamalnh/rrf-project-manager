import React from 'react';
import { NavLink } from 'react-router-dom';



const SingedinLinks = () => {
    return ( 
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating indigo darken-4">NN</NavLink></li> 
        </ul>
     );
}
 
export default SingedinLinks;