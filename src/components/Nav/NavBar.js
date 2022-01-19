import { Link, NavLink } from "react-router-dom";
import { useContexto } from "../../myContext";

const Navbar = ({ links }) => {
  const { totalCount } = useContexto();

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
          <span id="cart-icon" className="material-icons md-light">
            shopping_cart
          </span>
        </NavLink>
        {totalCount > 0 && <div id="cartNumber"> {totalCount}</div>}
      </nav>
    </header>
  );
};
export default Navbar;
