import { Link, NavLink } from "react-router-dom";
import { useContexto } from "../../Context/myContext";

const Navbar = ({ links }) => {
  const { totalCount } = useContexto();

  return (
    <header>
      <Link to="/">
        <h1 id="headerTitle">My Store</h1>
      </Link>
      <nav>
        {links.map((el, index) => {
          return (
            <NavLink key={el.id} to={el.href} className="navLink">
              {el.name}
            </NavLink>
          );
        })}
        <NavLink to={"/cart"}>
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
