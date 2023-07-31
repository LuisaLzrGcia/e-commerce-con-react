import DashboardView from "../../Dahsboard/DashboardView";
import useSWR from "../../hooks/useSWR.js";
const API_URL = import.meta.env.VITE_API_URL;

function CategoryMen() {
    const {
        data: productData,
        loading,
        error,
    } = useSWR({ url: `${API_URL}/products/category/women's%20clothing` });
    console.log("ropa mujer ", productData)
    return (
        <>
            {loading ? (
                <span>Cargando....</span>
            ) : (
                <DashboardView data={productData} />
            )}
            {!loading && error && <h1>Error fatal, consulta más tarde</h1>}
        </>
    )
}

export default CategoryMen