import axios from "axios"
import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer (){

    const [nuez, setNuez] = React.useState ([])

    const getNuez = () => {
        axios.get('https://apimocha.com/nuez/example')
        .then(result => {
            setNuez(result.data.results[0])
        })
    } 

    React.useEffect( () => {
        getNuez();
    },[])

    return(
        <ItemDetail nuez={nuez} />
    )
}  


