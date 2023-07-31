import Quantity from "./Quantity"
import { Link } from "react-router-dom";

function CartView({ products, removeToCart, addItemToProduct, totalSubtotal }) {

  return (
    <>
      <div className="px-12">
        <div className="bg-white border border-slate-100 flex h-full flex-col rounded-xl shadow-2xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <div className="text-lg font-medium text-gray-900">Carrito</div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-32 w-32 flex justify-center overflow-hidden rounded-md border border-gray-200 shadow-lg">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-auto"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between font-medium text-2xl text-gray-900">
                            <Link to={`/producto/${product.id}/${product.title}`}>
                              <h3>
                                {product.title}
                              </h3>
                            </Link>
                            <div className="text-xl w-1/2">
                              <div className="flex">
                                <span className="font-light">Precio Unitario</span>
                                <p className="text-2xl mx-4">$ {product.price}</p>
                              </div>
                              <div className="flex justify-end">
                                <span className="font-light">Subtotal</span>
                                <p className="text-2xl mx-4">$ {product.subtotal.toFixed(2)}</p>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-xl">
                          <Quantity product={product} addItemToProduct={addItemToProduct} />
                          <div className="flex">
                            <button onClick={() =>
                              removeToCart(product)
                            }
                              type="button"
                              className="p-3 flex items-center justify-center rounded-md shadow-xl bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-2xl font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$ {totalSubtotal.toFixed(2)}</p>
            </div>
            <div className="mt-6">
              <a href="pagar"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartView
