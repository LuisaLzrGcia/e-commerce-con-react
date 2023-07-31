import TarjetaProduct from "../components/TarjetProduct/TarjetaProduct";

function DashboardView({ data = [] }) {
  return (
    <>

      <div className="grid grid-cols-4 gap-4 items-center p-6 top-20 absolute w-full">
        {data.length > 0 &&
          data.map((product) => (
            <TarjetaProduct key={product.id} productData={product} />
          ))}
      </div>
    </>
  );
}

export default DashboardView;
