import './Header.css'
import logoImage from '../images/ChatGPT Image 26 de mai. de 2026, 23_00_43.png'
import imagemFundo from '../images/michael-van-gorkum-gRQyqIb6Y6Q-unsplash.jpg'

function Header() {
  return (
    <header
      className="header"
      style={{  backgroundImage: `url(${imagemFundo})` }}
    >
      <nav className="navbar">
        {/* Logo à esquerda */}
        <div className="logo-section">
          <img src={logoImage} className="logo-img" alt="Logo" />
        </div>

        {/* Links no centro com efeito vidro */}
        <div className="nav-glass">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#nature">Nature</a></li>
            <li><a href="#explore">Explore</a></li>
          </ul>
        </div>

        {/* Botão à direita */}
        <div className="nav-right">
          <button>Entrar</button>
        </div>
      </nav>

      {/* Texto hero centralizado à esquerda */}
      <div className="hero-content">
        <h1 className="texto">
          Da Amazônia ao Pantanal,<br />
          a Natureza Brasileira Vive Aqui
        </h1>
      </div>
    </header>
  )
}

export default Header