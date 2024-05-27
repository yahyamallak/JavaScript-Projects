import { Link } from "react-router-dom"
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <div className="logo">
        Appy
      </div>
      <nav>
        <ul>
          <Link to="/"><FontAwesomeIcon icon="fa-solid fa-list" /> Products</Link>
          <Link to="/product/add"><FontAwesomeIcon icon="fa-solid fa-square-plus" /> Add product</Link>
          <Link to="/login"><FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /> Login</Link>
          <Link to="/register"><FontAwesomeIcon icon="fa-solid fa-user-plus" /> Register</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header