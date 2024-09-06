import { useState } from "react"
const ListRender = () => {
const [list] = useState(["Matheus", "Pedro", "Josias"]);

  return (
    <div>
        <h1>lista</h1>
      <ul>
        {list.map((item)=>
            <li>{item}</li>
        )}
      </ul>
    </div>
  )
}

export default ListRender
