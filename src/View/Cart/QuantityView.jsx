function QuantityView(
    {
        product,
        currentCantidad,
        increment,
        decrement,
        decrementButtonClass
    }
) {
    return (
        <div className="flex justify-center items-center">
            <p className="text-gray-500">Cantidad:
                <span className="font-bold px-3" id={"cantidadId" + product.id}>
                    {currentCantidad}
                </span>
            </p>
            <div className="flex">
                <div className="px-3">
                    <button onClick={increment} className="w-10 h-10 bg-indigo-600 text-white flex justify-center items-center rounded-full" type="button">
                        <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={decrement} id="buttonDrecrement" className={decrementButtonClass} type="button">
                        <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuantityView