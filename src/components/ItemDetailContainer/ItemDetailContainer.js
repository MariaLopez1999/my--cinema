import { data } from "../Data/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [selected, setSelected] = useState({});
    const {id} = useParams();

    const getProduct =new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
       const productFiltered = data.filter((select) => {
        return select.id == id;
       });
    
            resolve(productFiltered);
    } else {
        resolve(data)
    }
    }, 0);
    });    

    useEffect(() => {
       getProduct
       .then((resolve) => setSelected(resolve))
        .catch(error => console.log(error));
    }, [id])


    return (
        <div>
           <ItemDetail select={selected}/>
        </div>
    );
};

export default ItemDetailContainer;

