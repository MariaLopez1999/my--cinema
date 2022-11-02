import React from 'react';
import carrito from '../../assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='navbar-logo'>
           <img className='logo' src={carrito} alt="cart widget"/> 
        </div>
    );
};

export default CartWidget;