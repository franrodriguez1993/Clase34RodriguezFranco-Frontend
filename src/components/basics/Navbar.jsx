import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const Navbar = () => {
  const { HLogout, user } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Coder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="products">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="cart">
                Carrito
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="profile">
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    style={{ border: "none", background: "none" }}
                    onClick={(e) => HLogout(e)}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="register">
                    Registrarse
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
