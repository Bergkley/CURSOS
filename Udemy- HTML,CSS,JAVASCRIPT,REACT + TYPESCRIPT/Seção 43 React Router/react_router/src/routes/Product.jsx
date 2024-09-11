import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


const Product = () => {
    const {id} = useParams();

    const url = "http://localhost:3000/products/" + id;

    const {data: products} = useFetch(url);

    if(!products) return <p>Carregando...</p>

  return (
    <div>
      <h1>Id do produto: {id}</h1>
      <div>
        <h1>Nome: {products?.name}</h1>
        <p>Preço: {products?.price}</p>
      </div>
    </div>
  )
}

export default Product
