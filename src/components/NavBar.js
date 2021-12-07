function Navbar() {
  return (
    <header>
      <span class="material-icons">public</span>
      <h1 id="header-title">Future e-Comerce</h1>
      <nav>
        <ul id="header-list">
          <li className="list-item">
            <a href="../public/index.html" className="list-link">
              Home
            </a>
          </li>
          <li className="list-item">
            <a href="../public/index.html" className="list-link">
              Products
            </a>
          </li>
          <li className="list-item">
            <a href="../public/index.html" className="list-link">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
