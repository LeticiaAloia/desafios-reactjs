export default function CartIcon ({counter}) {
    return (
        <div>
            {/* Imagen en carpeta "images", dentro de "public". */}
            <img src="/images/basket_icon.png" alt="Basket widget" />
            {counter}
        </div>
    )
}