import DashboardView from "./DashboardView"
import useSWR from "../hooks/useSWR"
import NotFound from "../View/NotFound/NotFound";
const API_URL = import.meta.env.VITE_API_URL

function DashboardHOC() {

  const {
    data: productData,
    loading,
    error,
  } = useSWR({ url: `${API_URL}/products` });

  return (
    <>
      {loading ? (
        <div className="top-24 fixed">
          <span className="p-3">Cargando....</span>
        </div>
      ) : (
        <DashboardView data={productData} />
      )}
      {!loading && error &&
        <NotFound/>}
    </>
  );
}

export default DashboardHOC;
