import { Link } from "react-router-dom"
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        Appy
      </div>
      <nav>
        <ul>
          <Link to="/">Products</Link>
          <Link to="/product/add">Add product</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header