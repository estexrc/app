import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <header>
      <Link to="/">
        <h1 id="header-title">Future e-Comerce</h1>
      </Link>
      <nav>
        {links.map((el, index) => {
          return (
            <Link key={el.id} to={el.href}>
              {el.name}
            </Link>
          );
        })}
        <NavLink to={"/carrito"}>
          <CartWidget />
        </NavLink>
      </nav>
    </header>
  );
};
export default Navbar;
