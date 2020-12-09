import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';

const Header = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    
    return (
        <div className='Header'>
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/inventory">Manage Inventory  </Link>
                
                <Link><button onClick={()=>setLoggedInUser({})}>Sign Out</button></Link>
            </nav>
        </div>
    );
};

export default Header;