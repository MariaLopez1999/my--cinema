import carrito from './cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='navbar-logo'>
           <img className='logo' src={carrito} alt="cart widget"/> 
        </div>
    );
};

export default CartWidget;



