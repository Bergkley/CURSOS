import { useEffect, useMemo, useState } from "react";


const HookUseMemo = () => {
    const [number, setNumber] = useState(0);

    // const premiumNumber = ["0","100","200"];

    const premiumNumber = useMemo(() => ["0", "100", "200"], []);

    useEffect(() => {
        console.log('Premium number foi alterado')
    }, [premiumNumber])
  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      {premiumNumber.includes(number) ? <h1>Acertou o número</h1> : <h1>Errou o número</h1>}
    </div>
  )
}

export default HookUseMemo
