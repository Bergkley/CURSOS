import React, { ChangeEvent, useState } from 'react'

type Props = {}

const State = (props: Props) => {
    const [texxt,setText] = useState<string | null>("testando o hook");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
  return (
    <div>
        <p>texto é: {texxt}</p>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State