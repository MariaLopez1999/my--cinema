import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
           <h1 className='navbar-title'>Cines Mery</h1>     
           <ul className='navbar-items'>
               <li>
                <a href=''className='items'>HOME</a>
               </li>
               <li>
                <a href=''className='items'>TICKETS</a>
               </li>
               <li>
                <a href=''className='items'>CONTACT</a>
               </li>
            </ul>

            <CartWidget/>
        </div>
    );
};

export default NavBar;

