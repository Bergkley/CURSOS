import { useState, useEffect } from "react";
import './App.css'

const url = "http://localhost:3000/products";

function App() {
  // 1 - resgantando dados
  const [products, setProducts] = useState([]);

   useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e)=> {
    e.preventDefault();

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    
  }

  return (
   <>
   <div className="App">
    <h1>HTTP em React</h1>
    {/* 1 - resgantando dados */}
    <ul>
      {products.map((product) => (
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
        <input type="submit" value="Enviar"  />
      </form>
    </div>
   </div>
   </>
  )
}

export default App
