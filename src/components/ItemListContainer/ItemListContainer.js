import React from "react"
import {Container, Row, Col} from "react-bootstrap"
// Importo componentes.
import ItemList from "../ItemList/ItemList"

// Falsa api.
import {products} from "../../data/productos"



// En la función paso la propiedad greeting como parámetro.
export default function ItemListContainer ({name, categoryId}) {

    // Variable para el estilo del contenedor de items.
    // const itemListContainerStyles =  {
    //     backgroundColor: "var(--fondoTarjetas)",
    //     fontFamily: "'Klee One', cursive'",
    //     color: "var(--colorGeneral)",
    //     padding: "10px 5%"
    // }

    // Use state.
    const [items, setItems] = React.useState([])
    
    // Use effect para poder tratar y mapear la promesa.
    React.useEffect(()=> {
       if(categoryId){
           setItems(products.filter(item => item.category_id === categoryId));
       }
       else {
           setItems(products);
       }
    }, [categoryId])

    return (
        <Container>
            <Row>
                <Col>
                <h1>{name}</h1>
                </Col>
            </Row>
            <Row>
                <ItemList items={items} />
            </Row>
        </Container>
    )
}