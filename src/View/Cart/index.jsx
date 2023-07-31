import { useEffect, useState } from "react";
import { useStoreReduxContext } from "../../hooks/Redux"
import CartView from "./CartView"

function Cart() {
    const { products, removeToCart, addItemToProduct } = useStoreReduxContext()
    const [totalSubtotal, setTotalSubtotal] = useState(0);
    const calculateSubtotal = (product) => {
        return product.cantidad * product.price;
    };
    useEffect(() => {
        const newTotalSubtotal = products.reduce(
            (total, product) => total + calculateSubtotal(product),
            0
        );
        setTotalSubtotal(newTotalSubtotal);
    }, [products]);
    return (
        <>
            <section className="items-center p-6 top-20 absolute w-full">
                {
                    Array.isArray(products) && products.length > 0
                        ? <CartView
                            products={products}
                            removeToCart={removeToCart}
                            addItemToProduct={addItemToProduct}
                            totalSubtotal={totalSubtotal} />
                        : <p className="text-xl">No tienes productos en el carrito</p>
                }

            </section>
        </>
    )
}

export default Cart
