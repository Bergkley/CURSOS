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
   </div>
   </>
  )
}

export default App
