// Array con mis productos.
const products = [
    {
        id: 1,
        name: "Avellanas",
        stock: 10,
        price: 350,
        detail: "Avellanas orgánicas. Origen: patagonia argentina. Producto disponible todo el año.",
        image: "images/avellana.webp"
    },
    {
        id: 1,
        name: "Nueces",
        stock: 15,
        price: 470,
        detail: "Nueces orgánicas. Origen: patagonia argentina. Producto disponible todo el año.",
        image: "images/nuez.webp"
    },
    {
        id: 1,
        name: "Pecan",
        stock: 10,
        price: 650,
        detail: "Nueces pecanas orgánicas. Origen: California, USA. Producto disponible todo el año.",
        image: "images/pecan.webp"
    },
    {
        id: 1,
        name: "Almendras",
        stock: 10,
        price: 380,
        detail: "Almendras orgánicas. Origen: patagonia argentina. Producto disponible todo el año.",
        image: "images/almendra.webp"
    },
]

// Creo una promesa para taer los productos. La exporto.
export const getProducts = new Promise ((resolve, reject) => {
    // Variable con set time out de 2 segundos para concretar las acciones de mi promesa.
    let condition = true
    setTimeout(()=> {
        if(condition){
            resolve(products)
        }
        else{
            reject(`Salió mal`)
        }
    }, 2000)
})