import { useState, useEffect } from "react";
import './App.css'
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // 1 - resgantando dados
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url);

  //  useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e)=> {
    e.preventDefault();

    const product = {
      name,
      price
    }

    // 5- refatorando post
    httpConfig(product, "POST");

    

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });
    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();
    // setProducts([...products, addedProduct]);
  }

  return (
   <>
   <div className="App">
    <h1>HTTP em React</h1>
    {/* 1 - resgantando dados */}
    {/* 6 - loading */}
    {loading && <p>Carregando dados...</p>}
    {error && <p>{error}</p>}
    <ul>
      {items && items.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
    {/* 2 - envio de dados */}
    <div className="app-product">
      <form onSubmit={handleSubmit}>
        <label>
           <span>Nome:</span>
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
           <span>Preço:</span>
           <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        {/* 7 - loading post */}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {!loading && <input type="submit" value="Enviar" />}
      </form>
    </div>
   </div>
   </>
  )
}

export default App
