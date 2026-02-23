import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Seu Logo</h1>
            </div>
            <ul className="navbar-menu">
                <li><a href="#about" id="about-link">Sobre Mim</a></li>
                <li><a href="#projects">Identidade Visual</a></li>
                <li><a href="#contact">Contatos</a></li>
            </ul>
        </nav>
    );
}
