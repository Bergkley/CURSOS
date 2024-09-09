import {data} from "./data/data"
import { useState} from 'react'
import './App.css'
import ImcCalc from './components/imcCalc'
import ImcTable from "./components/imcTable";

function App() {
  const calcImc = (e,height,weight) => {
    e.preventDefault();
    console.log('executou')
  }

  const [imc,setImc]= useState("");
  const [info,setInfo] = useState("");
  const [infoClass,setInfoClass] = useState("");
  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc ={calcImc}/>
      ): (
        <ImcTable />
      )}
    </div>
  )
}

export default App
