import { Link } from "react-router-dom"

import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <h2>
           <Link to={"/"}>Blog</Link> 
        </h2>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/new"}>Novo Post</Link>
            </li>
            <li>
                <Link to={"/admin"}>Gerenciar</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
