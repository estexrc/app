import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useContexto } from "../../myContext";

const Navbar = ({ links }) => {
  const { cantidad } = useContexto();

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
        {cantidad}
      </nav>
    </header>
  );
};
export default Navbar;
