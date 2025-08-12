import React, { useRef } from 'react';
import './styles/Services.css';

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      icon: "fas fa-code",
      title: "Desenvolvimento de Software",
      description: "Soluções personalizadas de software para impulsionar seu negócio com tecnologias modernas e práticas ágeis."
    },
    {
      icon: "fas fa-headset", 
      title: "Suporte de TI",
      description: "Suporte técnico especializado 24/7 para manter seus sistemas funcionando sem interrupções."
    },
    {
      icon: "fas fa-brain",
      title: "Implementação de IA",
      description: "Integração de inteligência artificial para otimizar processos e melhorar a tomada de decisões."
    },
    {
      icon: "fab fa-whatsapp",
      title: "Chatbots WhatsApp",
      description: "Automatize seu atendimento com chatbots inteligentes integrados ao WhatsApp."
    },
    {
      icon: "fas fa-users-cog",
      title: "Consultoria de TI",
      description: "Assessoria estratégica para alinhar tecnologia aos objetivos do seu negócio."
    },
    {
      icon: "fas fa-network-wired",
      title: "Infraestrutura de Rede",
      description: "Gerenciamento completo da infraestrutura de rede para garantir conectividade e desempenho."
    },
    {
      icon: "fas fa-laptop-medical",
      title: "Assistência Técnica Especializada",
      description: "Manutenção especializada para dispositivos Apple, Windows e Android, garantindo o melhor desempenho dos seus equipamentos."
    },
    {
      icon: "fas fa-desktop",
      title: "Aluguel e Venda de Equipamentos",
      description: "Fornecimento de equipamentos de TI, incluindo computadores, periféricos e infraestrutura completa para empresas através de venda ou locação."
    },
    {
      icon: "fas fa-database",
      title: "Gestão de Dados",
      description: "Soluções para armazenamento, processamento e análise eficiente de dados."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Segurança da Informação",
      description: "Proteção abrangente para seus dados e sistemas contra ameaças cibernéticas."
    }
  ];

  return (
    <section id="servicos" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Nossos Serviços</h2>
        
        <div className="services-carousel-container">
          <button className="carousel-button prev" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="services-grid" ref={scrollContainerRef}>
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
