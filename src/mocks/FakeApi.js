// Array con mis productos.
const products = [
    {
        id: 1,
        name: "Avellanas",
        stock: 10,
        price: 350,
        image: "images/avellana.webp"
    },
    {
        id: 1,
        name: "Nueces",
        stock: 15,
        price: 470,
        image: "images/nuez.webp"
    },
    {
        id: 1,
        name: "Pecan",
        stock: 10,
        price: 450,
        image: "images/pecan.webp"
    },
    {
        id: 1,
        name: "Almendras",
        stock: 10,
        price: 380,
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