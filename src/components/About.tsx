import React from 'react';
import './styles/About.css';
// Você precisará adicionar esta imagem
import img from '../assets/softwareDeveloper.webp';
import logo from '../assets/LogoCompleta.png';

const About: React.FC = () => {
  return (
    <section id="sobre" className="about-section"> 
      <div className="slogan-container">
        <h1 className="about-slogan">
          Inovação e Tecnologia para Transformar seu Negócio
        </h1>
      </div>

      <div className="about-container">
        <div className="about-left">
          <div className="about-image-placeholder">
            <img src={img} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        
        <div className="about-right">
          <p className="about-description">
            <span className="about-highlight"><img src={logo} alt="Hysolutions" style={{ width: '200px', height: 'auto', verticalAlign: 'middle' }} /></span> Mais do que uma empresa de tecnologia,
            somos parceiros na transformação digital do seu negócio. Combinamos expertise em desenvolvimento,
            infraestrutura e consultoria para criar soluções personalizadas que impulsionam sua empresa
            para o futuro.
          </p>
          <p className="about-description">
            Nossa missão é capacitar empresas através da tecnologia, oferecendo soluções inovadoras
            e serviços de TI de alta qualidade que garantem resultados reais e duradouros para nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
