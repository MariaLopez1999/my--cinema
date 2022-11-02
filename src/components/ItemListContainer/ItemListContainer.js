import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div className='greeting'>
            <h2 className='greeting-title'>{props.name}</h2>
        </div>
    );
};

export default ItemListContainer;