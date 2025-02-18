import React from 'react'
import Link from "next/link"

const CategoryPage = () => {
  return (
    <div>
        <h1>Conheça nossas roupas</h1>
        <Link href={'/produtos/categorias/roupas/camisa-gola-v'}>Camisa Gola V</Link>
    </div>
  )
}

export default CategoryPage