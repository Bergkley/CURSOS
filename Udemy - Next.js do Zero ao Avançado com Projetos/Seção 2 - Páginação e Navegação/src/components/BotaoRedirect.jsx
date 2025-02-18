"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const BotaoRedirect = () => {
    const router = useRouter()
    function sendEmailAndRedirect(){
        router.push("/dashboard")
    }
  return (
    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={sendEmailAndRedirect}>Finalizar envio</button>
  )
}

export default BotaoRedirect