import { Link } from "react-router-dom";

function TarjetaProduct({ productData }) {
  const { title, price, image, description, category } = productData || {};

  return (
    <>
      <Link to={`/producto/${productData.id}/${productData.title}`}>
        <div
          className="h-full border rounded-md	drop-shadow-lg bg-slate-200 

"
        >
          <div className="hover:opacity-90">
            <div className="flex items-center justify-center h-60 bg-white">
              <img className="h-60 w-auto" src={image} alt={title} />
            </div>
            <div className="p-3 w-auto self-center h-full">
              <div className="text-cyan-700	uppercase">
                <strong>{category}</strong>
              </div>
              <div className="text-cyan-950	text-xl truncate">
                <strong>{title}</strong>
              </div>
              <div className="truncate text-xs">
                {description}
              </div>
              <div className="text-lg font-medium text-gray-900">
                $<span>{price}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TarjetaProduct;
