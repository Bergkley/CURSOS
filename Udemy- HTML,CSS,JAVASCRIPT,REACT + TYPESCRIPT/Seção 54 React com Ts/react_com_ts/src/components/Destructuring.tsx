import React from 'react'

type Props = {
    title: string
    content:string
    commentsQty:number
    tags: string[]

    // 8 - enum
    category: Category
}

export enum Category {
    CSS = "CSS",
    HTML = "HTML",
    JAVASCRIPT = "JAVASCRIPT",
    REACT = "REACT",
    TYPESCRIPT = "TYPESCRIPT"
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentsQty}</p>
        {tags.map((tag) => (
            <span>#{tag}</span>
        ))}
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring