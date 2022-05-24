import {Card} from "react-bootstrap"

import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail ({item}) {
    return(
        <Card>
            <Card.Img variant="top" src={item.merge} width={"400px"} height={"auto"} alt={item.name}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.detail}</Card.Text>
                <h3>{item.price}</h3>
                <ItemCount/>
            </Card.Body>
        </Card>
    );
}