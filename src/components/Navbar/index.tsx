import { wordleState } from "../../state/wordleState";

const Navbar = () => {
  const { gameType, setGameType } = wordleState();
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
        <a
          role="button"
          className="navbar-burger"
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
