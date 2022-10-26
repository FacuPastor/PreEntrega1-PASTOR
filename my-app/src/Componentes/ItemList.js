import React from 'react'
import Zapatillas from '../APIrest/Zapatillas.json'
import Item from './Item'

const ItemList = () => {

    return (
        <div className="flex flex-wrap justify-between tienda">
            <h1>Productos destacados</h1>
            {Zapatillas.map((zapatillas) => (
                <Item 
                key={zapatillas.id}
                marca={zapatillas.marca}
                modelo={zapatillas.modelo}
                color={zapatillas.color}
                precio={zapatillas.precio}
                img={zapatillas.img}
                />
            ))}
    </div>
    )
}

export default ItemList;