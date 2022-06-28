import { wordleState } from "../../state/wordleState";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { gameType, setGameType } = wordleState();
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className={`navbar-item ${styles.main}`} href="/">
          TRUCHORDLE
        </a>
        <a
          role="button"
          className="navbar-burger mr-0 ml-auto"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a
            className={`navbar-item is-tab ${
              gameType === "estandard" && "is-active"
            }`}
            role="button"
            onClick={() => setGameType("estandard")}
          >
            Estandard
          </a>
          <a
            className={`navbar-item is-tab ${
              gameType === "pokemon" && "is-active"
            }`}
            role="button"
            onClick={() => setGameType("pokemon")}
          >
            Pokemon
          </a>
          <a
            className={`navbar-item is-tab ${
              gameType === "star wars" && "is-active"
            }`}
            role="button"
            onClick={() => setGameType("star wars")}
          >
            Star Wars
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
