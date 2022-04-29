export default function Navbar () {
    // Estilo del header
    const headerStyles = {
        backgroundColor: "var(--verdeLogo)",
        color: "var(--colorGeneral)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        boxShadow: "rgb(0 0 0 / 50%) 1px 10px 10px"  
    }
    
    return ( 
        // Aplico el estilo.
        <header style={headerStyles}>
            <div>
                <nav>
                    <ul>
                        <li > 
                            Nosotros
                        </li>
                        <li>
                            Market
                            {/* Submenú */}
                            <ul >
                                <li>
                                    Frutas y Vegetales
                                </li>
                                <li>
                                    Vivero
                                </li>
                                <li>
                                    Cafés
                                </li>
                                <li>
                                    Extras
                                </li>
                            </ul> 
                        </li>
                        <li>
                            Lounge
                        </li>
                        <li>
                            Productos
                        </li>
                        <li>
                            Contacto
                        </li>
                    </ul>
                    </nav>
            </div>
        </header> 
    );
}