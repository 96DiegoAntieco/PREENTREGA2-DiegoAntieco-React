import { Link, NavLink } from "react-router-dom";
import CartWiget from "../CartWidget/CartWidget";

function NavBar(props) {
  const { img } = props;
  return (
    <nav className="hero is-danger ">
      <div className="columns ">
        <div className="column is-4">
          <figure>
            <Link to="/">
              <img className="image is-128x128 ml-8" src={img} alt="Logo" />
            </Link>
          </figure>
        </div>
        <div className="column is-flex is-align-items-center">
          <NavLink
            to={`/categoria/autos
            `}
            className="button is-black  is-rounded mr-5"
          >
            AUTOS
          </NavLink>
          <NavLink
            to={`/categoria/camionetas`}
            className="button is-black  is-rounded mr-5"
          >
            CAMIONETAS
          </NavLink>
          <NavLink
            to={`/categoria/contacto`}
            className="button is-black  is-rounded mr-5"
          >
            SOBRE NOSOTROS
          </NavLink>
        </div>
        <div className="column is-flex is-align-items-center ml-4">
          <CartWiget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
