import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="./about">About</Link>
        </li>
        <li>
          <Link to="./gallery">Gallery</Link>
        </li>
        <li>
          <Link to="./prices">Prices</Link>
        </li>
        <li>
          <Link to="./enquire">Enquire</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
