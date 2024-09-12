import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container my-5">
            <h2 className="text-center">{greeting}</h2>
        </div>
    );
}

export default ItemListContainer;