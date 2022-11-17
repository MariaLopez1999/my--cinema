import React from "react";

const ItemDetail = ({select}) => {
    return (
        <div>
            <h2> {select.id}</h2>
            <h2>SE ESTRENA MUY PRONTO {select.title}</h2>
            <h2>NO TE LA PIERDAS!{select.type}</h2>
        </div>
    );
};

export default ItemDetail;