import logo from "./assets/spotify.svg";
import Home from "./assets/Home.svg";
import Search from "./assets/Search.svg";
import Library from "./assets/Library.svg";
import Coração from "./assets/Coração.svg";
import mais from "./assets/mais.svg";
import language from "./assets/language.svg";
import NavLink from "./components/nav-link";
import "./styles.css";
import Button from "./components/button-nav";

function Menu() {
  return (
    <nav className="menu">
      <a href="/" className="logo-menu">
        <img alt="logo do spotify" src={logo} />
      </a>
      <ul className="list-nav-link">
        <NavLink
          className="nav-link-img-container"
          src={Home}
          alt="icone home"
          text="Início"
        />
        <NavLink
          className="nav-link-img-container"
          src={Search}
          alt="icone Search"
          text="Buscar"
        />
        <NavLink
          className="nav-link-img-container"
          src={Library}
          alt="icone Library"
          text="Sua Biblioteca"
        />
      </ul>
      <ul className="container-nav">
        <NavLink
          className="nav-link-img-bg"
          src={mais}
          alt="icone home"
          text="Criar playlist"
        />
        <NavLink
          className="nav-link-img-bg bg-color"
          src={Coração}
          alt="icone musicas curtidas"
          text="Músicas Curtidas"
        />
      </ul>
      <div className="container-links-bottom">
        <a href="#" className="link-bottom">
          Cookies
        </a>
        <Button
          text="Português do Brasil"
          src={language}
          alt="icone de linguagem"
        />
      </div>
    </nav>
  );
}

export default Menu;
