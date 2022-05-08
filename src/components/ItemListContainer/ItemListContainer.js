import AddButton from "../AddButton/AddButton"

// En la función paso la propiedad greeting como parámetro.
export default function ItemListContainer ({greeting}) {
    // Variable para el estilo del contenedor de items.
    const itemListContainerStyles =  {
        backgroundColor: "var(--fondoTarjetas)",
        fontFamily: "'Klee One', cursive'",
        color: "var(--colorGeneral)",
        padding: "10px 5%"
    }

    return (
        // aplico el estilo.
        <div style={itemListContainerStyles}>
            {/* Llamo a la propiedad. */}
            <h1>Bienvenido... {greeting}</h1>

            <div className="item">
                <AddButton />
            </div>

        </div>
        )
}