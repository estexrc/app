import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useContexto } from "../../myContext";

const Navbar = ({ links }) => {
  const { cart } = useContexto();

  const totalCart = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <header>
      <Link to="/">
        <h1 id="header-title">My Store</h1>
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
        {totalCart}
      </nav>
    </header>
  );
};
export default Navbar;
