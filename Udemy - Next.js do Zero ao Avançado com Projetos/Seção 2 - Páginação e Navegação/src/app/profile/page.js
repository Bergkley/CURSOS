import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
    const user = true;
    if (!user) {
        redirect('/');
    }
  return (
    <div><h1>Bem vindo ao seu perfil</h1></div>
  )
}

export default page