import { useStoreContext } from '../../context/StoreContext'
import { useParams } from 'react-router-dom'
import useSWR from '../../hooks/useSWR'
import ProductDetailView from './ProductDetailView';
import { useStoreReduxContext } from "../../hooks/Redux"
const API_URL = import.meta.env.VITE_API_URL;

function ProductDetail() {
  const { addToCart } = useStoreReduxContext()

  const { id } = useParams()

  const { data } = useSWR({ url: `${API_URL}/products/${id}` })
  return <ProductDetailView data={data} addToCart={addToCart} />
}

export default ProductDetail
