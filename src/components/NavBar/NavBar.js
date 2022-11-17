import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
           <h1 className='navbar-title'>Cines Mery</h1>     
           <ul className='navbar-items'>

               <li className='items' >
                <NavLink className={({isActive}) => isActive ?'active' : 'inactive' } to="/">Home</NavLink>  
               </li>
               <li className='items'>
               <NavLink className={({isActive}) => isActive ?'active' : 'inactive' } to="/type/Terror">Terror</NavLink>
               </li>
               <li className='items'>
               <NavLink className={({isActive}) => isActive ?'active' : 'inactive' } to="/type/Animados">Animados</NavLink>
               </li>
            </ul>

            <CartWidget/>
            
        </div>
        
    );
};

export default NavBar;



