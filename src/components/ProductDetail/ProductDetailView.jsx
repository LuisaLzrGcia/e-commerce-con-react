import React from "react";

function ProductDetailView({ data, addToCart }) {
    return (
        <>
            <div className=" px-20 py-10 h-[80vh] mt-20">
                <div className="flex h-full">
                    <div className="flex content-center justify-center flex-wrap">
                        <div className="w-1/2">
                            <img
                                className="w-auto h-auto"
                                src={data.image}
                                alt={data.title}
                            />
                        </div>
                    </div>
                    <div className="text-center h-full w-1/2">
                        <div className="flex flex-col bg-gray-100 h-auto rounded-lg shadow-xl p-3">
                            <div className="py-3 uppercase text-xl">
                                {data.category}
                            </div>
                            <div className="py-3  text-2xl text-sky-950	font-bold">
                                {data.title}
                            </div>
                            <div className="py-3 ">
                                {data.description}
                            </div>
                            <div className="py-3 text-3xl font-semibold">
                                $<span>{data.price}</span>
                            </div>
                        </div>
                        <div className="py-3 flex justify-center">
                            <button onClick={() => addToCart(data)} className="rounded-full shadow-xl bg-slate-200 px-5 py-2 flex hover:bg-gray-800 absolute hover:text-white active:bg-gray-700">
                                <div className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="px-1">Añadir al carrito</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetailView;
