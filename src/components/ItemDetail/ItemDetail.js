import React from 'react'
// Componentes que importo de Bootstrap.
import {Card, Button} from 'react-bootstrap'

export default function ItemDetail ({nuez}) {

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={nuez.foto} />
                <Card.Body>
                    <Card.Title>{nuez.nombre}</Card.Title>
                    <Card.Text>
                    <p>Precio: ${nuez.precio}</p>
                    <p>{nuez.descripcion}</p>
                    </Card.Text>
                    <Button>Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}