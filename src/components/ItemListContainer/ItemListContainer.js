import React, { useEffect, useState } from "react"
// Importo componente.
import ItemList from "../ItemList/ItemList"



// En la función paso la propiedad greeting como parámetro.
export default function ItemListContainer ({greeting}) {

    // Variable para el estilo del contenedor de items.
    const itemListContainerStyles =  {
        backgroundColor: "var(--fondoTarjetas)",
        fontFamily: "'Klee One', cursive'",
        color: "var(--colorGeneral)",
        padding: "10px 5%"
    }

    const [listaProductos, setListaProductos] = useState([])
    // Array con mis productos.
    const products = [
        {
            id: 1,
            name: "Avellanas",
            stock: 10,
            price: 350,
            image: "images/avellana.webp"
        },
        {
            id: 1,
            name: "Nueces",
            stock: 15,
            price: 470,
            image: "images/nuez.webp"
        },
        {
            id: 1,
            name: "Pecan",
            stock: 10,
            price: 450,
            image: "images/pecan.webp"
        },
        {
            id: 1,
            name: "Almendras",
            stock: 10,
            price: 380,
            image: "images/almendra.webp"
        },
    
    ]
    
    // Creo una promesa para taer los productos.
    const getProducts = new Promise ((resolve, reject) => {
        // Variable con set time out de 2 segundos para concretar las acciones de mi promesa.
        let condition = true
        setTimeout(()=> {
            if(condition){
                resolve(products)
            }
            else{
                reject(`Salió mal`)
            }
        }, 2000)
    })
    
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