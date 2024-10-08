import { useState } from "react";
import "./MyForm.css";
const MyForm = ({userName,userEmail}) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [role, setRole] = useState("");

  const [bio, setBio] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };
  return (
    <div>
      {/* 1- criação de form */}
      {/* 5 - envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            // 6 - controlled input
            value={name || ""}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
      {/* 2- label envolvendo input */}
      <label>
        <span>E-mail</span>
        <input
          type="text"
          name="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          // 6 - controlled input
          value={email || ""}
        />
      </label>
      {/* 8 - Textarea */}
      <label>
        <span>Bio:</span>
        <textarea name="bio" placeholder="Descrição do user" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
      </label>
      {/* 9 - select */}
      <label>
        <span>Função no sistema</span>
        <select name="role" onChange={(e) => setRole(e.target.value)} value={role} >
          <option value="user">Usário</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </label>
    </div>
  );
};

export default MyForm;
