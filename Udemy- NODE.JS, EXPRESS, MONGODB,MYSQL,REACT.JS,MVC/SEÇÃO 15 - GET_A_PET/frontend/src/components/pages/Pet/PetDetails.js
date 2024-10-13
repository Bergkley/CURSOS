import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import useFlashMessage from '../../../hooks/userFlashMessage'

import styles from './PetDetails.module.css'


/* hooks */
const PetDetails = () => {
    const [pet, setPet] = useState({});
    const { id } = useParams();
    const {setFlashMessage} = useFlashMessage();
    const [token] = useState(localStorage.getItem('token') || '')
    console.log('token', token)

    useEffect(() => {
        api.get(`/pets/${id}`).then((response) => {
          setPet(response.data.pet)
        })
      }, [id])

      return (
        <>
          {pet.name && (
            <section className={styles.pet_details_container}>
              <div className={styles.petdetails_header}>
                <h1>Conhecendo o Pet: {pet.name}</h1>
                <p>Se tiver interesse, marque uma visita para conhecê-lo!</p>
              </div>
              <div className={styles.pet_images}>
                {pet.images.map((image, index) => (
                  <img
                    key={index}
                    src={`${image}`}
                    alt={pet.name}
                  />
                ))}
              </div>
              <p>
                <span className="bold">Peso:</span> {pet.weight}kg
              </p>
              <p>
                <span className="bold">Idade:</span> {pet.age} anos
              </p>
              <p>
                <span className="bold">Descrição:</span> {pet.description} 
              </p>
              {token ? (
                <button>Solicitar uma Visita</button>
              ) : (
                <p>
                  Você precisa <Link to="/register">criar uma conta</Link> para
                  solicitar a visita.
                </p>
              )}
            </section>
          )}
        </>
      )
}

export default PetDetails