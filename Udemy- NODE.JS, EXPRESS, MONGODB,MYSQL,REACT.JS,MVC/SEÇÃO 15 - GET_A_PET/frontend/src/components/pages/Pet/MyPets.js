import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MyPets = () => {
    const [pet,setPet] = useState([]);

  return (
    <section>
        <h1>MyPets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
        <div>
            {pet.length > 0 && (
                <p>Meus pets cadastrados</p>
            )}
            {pet.length === 0 && <p> Não há pets cadastrados</p>}
        </div>
    </section>
  )
}

export default MyPets