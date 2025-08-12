import React from 'react';
import './styles/Contact.css';

const Contact: React.FC = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Hysolutions.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <h2>Entre em Contato</h2>
        
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+55 (11) 99999-9999</p>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>contato@hysolutions.com.br</p>
          </div>

          <div className="contact-social">        
                <i className="fab fa-instagram"></i>
                <p>@hysolutions</p>             
          </div>

          <div className="contact-cta">
            <a href={whatsappLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="whatsapp-button">
              <i className="fab fa-whatsapp"></i>
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

