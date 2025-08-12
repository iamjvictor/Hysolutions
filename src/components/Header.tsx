import React from 'react';
import './styles/Header.css';
import logo from '../assets/LogoCompleta.png';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        
        
        <div className="header-bottom">
          <img src={logo} alt="Logo" className="logo" style={{ width: '400px', height: '120px', objectFit: 'contain' }} />

          <nav className="main-nav">
            <ul>
              <li><a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>Sobre</a></li>
              <li><a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos'); }}>Serviços</a></li>
              <li><a href="#consultoria" onClick={(e) => { e.preventDefault(); scrollToSection('consultoria'); }}>Consultoria</a></li>
              <li><a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a></li>
            </ul>
          </nav>

          <div className="auth-buttons">
            
          <a href="https://wa.me/5511999999999" 
               target="_blank" 
               rel="noopener noreferrer"
               className="whatsapp-button">
              <i className="fab fa-whatsapp"></i>
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 