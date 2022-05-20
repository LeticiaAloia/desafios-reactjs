// Componentes que importo de Bootstrap.
import {Card} from 'react-bootstrap'

// Componente
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail ({item}) {
    return(
        <Card>
            <Card.Img variant="top" src={item.image} alt={item.name} style={{width: '350px', height: 'auto'}} />
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.detail}</Card.Text>
            <h3>${item.price}</h3>
            <ItemCount />
            </Card.Body>
        </Card>
    );
}