import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({producto}) => {
    return (
        <Link to={`item/${producto.id}`}>
        <div>
            <img className='imagenes' alt={producto.title} src={`assets/${producto.image}.jpg`} />
            <div className='product'>
            <h2> |Pelicula: {producto.title}</h2> 
            <h2> |  Genero: {producto.type}</h2> 
            </div>
        </div>
        </Link>
    );
};
 
export default Item;








