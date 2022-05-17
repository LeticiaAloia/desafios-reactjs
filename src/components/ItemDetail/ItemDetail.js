import React from 'react'
// Componentes que importo de Bootstrap.
import {Card, Button} from 'react-bootstrap'

export default function ItemDetail ({nuez}) {

    const img = {
        width: "50%",
        paddingLeft: "20px",
        paddingTop: "20px",
    }

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={nuez.image} style={img} />
                <Card.Body>
                    <Card.Title>{nuez.name}</Card.Title>
                    <Card.Text>
                    <p>Precio: ${nuez.price}</p>
                    <p>{nuez.detail}</p>
                    </Card.Text>
                    <Button>Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}