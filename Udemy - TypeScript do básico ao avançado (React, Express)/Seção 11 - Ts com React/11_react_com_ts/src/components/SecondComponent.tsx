import React from 'react'

type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Meu segundo component</p>
        <p>meu nome é {props.name}</p>
    </div>
  )
}

export default SecondComponent