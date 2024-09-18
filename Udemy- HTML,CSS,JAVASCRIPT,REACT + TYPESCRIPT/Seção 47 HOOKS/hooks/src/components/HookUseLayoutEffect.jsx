import { useEffect, useLayoutEffect, useState } from "react"

const HookUseLayoutEffect = () => {
    const [name,setName] = useState("Berg Brasil")

    useEffect(() => {
        console.log("2")
        setName("João da Silva")
    },[])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    },[])
  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <p>Nome: {name}</p>
    </div>
  )
}

export default HookUseLayoutEffect
