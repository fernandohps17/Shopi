// Function para sumar el precio de los productos agregados en el carrito de compras
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)

    return sum
}