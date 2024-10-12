import React, { useEffect, useState } from "react";
import formStyles from "../../../components/form/Form.module.css";
import styles from './Profile.module.css'

import Input from "./../../form/input";
import api from "../../../utils/api";

const Profile = () => {
    const [user, setUser] = useState({});
    const [token] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
    api
      .get('/users/checkuser', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data)
      })
  }, [token])

    console.log('user', user)

  const onFileChange = (e) => {};
  const handleChange = (e) => {};
  return (
    <section>
     <div className={styles.profile_header}>
        <h1>Perfil</h1>
        <p>Preview Imagem</p>
     </div>
      <form className={formStyles.form_container}>
      <Input
          text="Imagem"
          type="file"
          name="image"
          handleOnChange={onFileChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o e-mail"
          handleOnChange={handleChange}
          value={user.email || ''}
        />
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o nome"
          handleOnChange={handleChange}
          value={user.name || ''}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
          value={user.phone || ''}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Editar" />
      </form>
    </section>
  );
};

export default Profile;
