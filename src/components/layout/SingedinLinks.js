import React from 'react';
import { connect } from 'react-redux';
import {signOut} from '../../store/actions/auth.action'
import { NavLink } from 'react-router-dom';



const SingedinLinks = (props) => {
    // console.log(props)
    return ( 
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/" onClick={() => props.signOut()}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating indigo darken-4">NN</NavLink></li> 
        </ul>
     ); //start with 25
}
 
export default connect(null, {signOut})(SingedinLinks);