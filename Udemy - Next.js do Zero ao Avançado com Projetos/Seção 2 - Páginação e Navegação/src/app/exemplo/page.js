"use client";

import { useSearchParams } from "next/navigation";

const Exemplo = () => {
  const searchParams = useSearchParams();

  const param = searchParams.get("parametro");

  const isParams = searchParams.has("parametro");

  return (
    <div>
      <h1>Página de Exemplo</h1>
      <p>O parâmetro recebido é: {param}</p>
      {isParams && <p>Parâmetro recebido</p>} 
    </div>
  );
};

export default Exemplo;
