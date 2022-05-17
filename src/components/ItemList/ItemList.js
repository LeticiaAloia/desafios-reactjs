import React from 'react'
// Importo mi item.
import Item from '../Item/Item'

const ItemList = ({listaProductos}) => {
    return(
        <>
        {/* Saco el h3 del div para poder alinear mis cards por debajo. */}
        <h3>Lista de productos</h3>
        {/* Div con mis cards. */}
        <div style={{display:'flex', justifyContent:'space-between', spaceWrap:'wrap', alignItems:'center'}}>
        {/* Mapeo mi array de objetos product con la id como clave. */}
        {listaProductos.map((product) => < Item product={product} key={product.id} />)}
        </div>
        </>
    )
}

export default ItemList