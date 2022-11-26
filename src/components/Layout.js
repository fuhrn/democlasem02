import bkg from "../assets/bkg.jpeg";
import logo from "../assets/logo.svg";
// css modules
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import styles from "./Navlink.module.css";
import Variant from "./Variant";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <img
          style={{
            height: "100vh",
            width: "100%",
            objectFit:
              "cover" /* para que al hacer width: 100% la imagen no se distorsione */,
            position: "absolute",
            zIndex: -1,
          }}
          src={bkg}
          alt=""
        />

        {/*aplicamos un div para darle color mas oscuro*/}
        {/*pero asi como está ubicado el div, react lo va a poner en la segunda fila del layout*/}
        {/*en la primera fila puso la img de la etiqueta anterior*/}
        {/*pero lo que queremos es que quede flotando en nuestro componente*/}
        {/*agrego position relative a .layout y absolute al div y a la img*/}
        <div
          style={{
            height: "100vh",
            width: "100%",
            background:
              "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.30015756302521013) 0%, rgba(0,0,0,1) 100%)",
            position: "absolute",
            zIndex: -1,
          }}
        />
        <header className="header">
          {/*Inicialmente el logo esta tapado por imagen cafe, por la propiedad z-index*/}
          {/*por ello le voy a agregar esa propiead a esa imagen y al gradient, y los mando atras*/}
          <img src={logo} alt="logo" />
          <Nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
              to="/"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
              to="/ourcofee"
            >
              Our Cofees
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : styles.navLink
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </header>
        {children}
        <Variant />
      </div>
    </>
  );
};

export default Layout;
