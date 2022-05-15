import React from 'react'
// Componentes que importo de Bootstrap.
import {Card, Button} from 'react-bootstrap'

export default function ItemDetail({product}) {
    <div>
        {/* Card de Bootstrap. Inserto las propiedades de los objetos de mi array de productos como props.  */}
        <Card style={{ width: '18rem', color:'black'}}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
            ${product.price} por 250g
            </Card.Text>
        <Button style={{color:'black'}}>Ver más</Button>
        </Card.Body>
        </Card>
    </div>
}