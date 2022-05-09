import React from "react"
// Toastify.
import {toast} from "react-toastify"

export default function AddButton() {
    // Estilo del botón.
    const addButtonStyles = {
        backgroundColor: "var(--verdeLogo)",
        color: "var(--colorParrafo)",
        padding: "0.5rem 1rem",
        fontFamily: "'Klee One', cursive",
        fontSize: "1rem"
    }
    
    // Declaración del state hook.
    const [count, setCount] = React.useState(1)
    
    const stock = 10

    // Función para aumentar cantidad, hasta completar el stock.
    const onAdd = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    // Función para disminuir cantidad.
    const onDecrease = () => {
        if(count >=1){
            setCount(count - 1)
        }
    }

    // Función para agregar al carrito.
    const onSubmit = () => {
        toast(`Agregaste ${count} unidades al carrito`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    // Componente de presentación.
    const StockButton = ({handleOnClick, text}) => {
        return <button className="stock-button" onClick={handleOnClick}>{text}</button>;
    }
    // Componente de presentación.
    const AddButton = ({handleOnSubmit}) => {
        return <button className="add-button" onClick={handleOnSubmit} style={addButtonStyles}>Añadir producto</button>;
        
    }

    return (
        <div className="add-button-container">
            <button style={addButtonStyles} >
                <StockButton text="-" handleOnClick={onDecrease} style={addButtonStyles} />
                <span className="add-button-count" style={addButtonStyles}>{count}</span>
                <StockButton text="+" handleOnClick={onAdd} style={addButtonStyles} />
                <AddButton style={addButtonStyles} handleOnSubmit={onSubmit} />
            </button>
            
        </div>
    );
}