import React, { useEffect, useState } from "react"
// Importo componentes.
import ItemList from "../ItemList/ItemList"
// Falsa api.
import { getProducts } from "../../mocks/FakeApi"



// En la función paso la propiedad greeting como parámetro.
export default function ItemListContainer ({greeting}) {

    // Variable para el estilo del contenedor de items.
    const itemListContainerStyles =  {
        backgroundColor: "var(--fondoTarjetas)",
        fontFamily: "'Klee One', cursive'",
        color: "var(--colorGeneral)",
        padding: "10px 5%"
    }

    // Use state.
    const [listaProductos, setListaProductos] = useState([])
    
    // Use effect para poder tratar y mapear la promesa.
    useEffect(()=> {
        getProducts
        .then((res)=> setListaProductos(res))
        .catch((error)=> console.log(error))
    }, [])

    return (
        // aplico el estilo.
        <div style={itemListContainerStyles}>
            {/* Llamo a la propiedad. */}
            <h1>Bienvenido... {greeting}</h1>

            <ItemList listaProductos={listaProductos}/>
        </div>
    )
}