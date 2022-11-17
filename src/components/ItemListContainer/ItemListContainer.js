import { data } from '../Data/data'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { typeName } = useParams ();

    const getProducts = new Promise((resolve, reject) => {
       setTimeout(() => {
        if (typeName) {
            const filteredData = data.filter((producto) => {
                return producto.type === typeName;
            });
            console.log(filteredData);
            resolve(filteredData);
        } else {
        resolve(data)
        }
       }, 1000);
    });

    useEffect(() => {
        getProducts
        .then((resolve) => setItems(resolve))
        .catch(error => console.log(error));
        }, [typeName])
        return (
            <div>
                <ItemList products={items}/>
            </div>
        );
        
};

export default ItemListContainer



