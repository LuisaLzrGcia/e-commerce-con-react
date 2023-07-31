import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import QuantityView from './QuantityView'

function Quantity({ product, addItemToProduct }) {
    const [currentCantidad, setCurrentCantidad] = useState(product.cantidad)

    const increment = () => {
        setCurrentCantidad(currentCantidad + 1)
    }
    const decrement = () => {
        if (currentCantidad > 1) {
            setCurrentCantidad(currentCantidad - 1)
        }
    }

    useEffect(() => {
        const updatedProduct = { ...product, cantidad: currentCantidad };
        addItemToProduct(updatedProduct)
    }, [currentCantidad])

    const decrementButtonClass = classNames({
        'w-10 h-10 bg-indigo-600 text-white flex justify-center items-center rounded-full': currentCantidad > 1,
        'w-10 h-10 bg-indigo-400 text-white flex justify-center items-center rounded-full': currentCantidad === 1,
    })
    return (
        <>
            <QuantityView
                product={product}
                currentCantidad={currentCantidad}
                increment={increment}
                decrement={decrement}
                decrementButtonClass={decrementButtonClass}
            />
        </>
    )
}

export default Quantity