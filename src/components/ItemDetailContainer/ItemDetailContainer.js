import React from "react"

import ItemDetail from "../ItemDetail/ItemDetail";

import {products} from "../../data/productos";

export default function ItemDetailContainer () {
    let itemId = 3;

    const [selected, setSelected] = React.useState({});

    const getItem = () => {
        const promesa = new Promise((res, rej) => {
            setTimeout (() => {
                res(products.find((prod)=>prod.id === itemId));
            }, 3000);
        });
        promesa.then((prod)=> {
            setSelected(prod);
        });
    }
    React.useEffect(()=>{
        getItem()},[itemId])

    return(
        <ItemDetail prod={selected} />
    )    
    
    
};



