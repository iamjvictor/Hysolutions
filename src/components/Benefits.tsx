import React from 'react';
import './styles/Benefits.css';

const Benefits: React.FC = () => {
    const benefits = [
        {
            icon: "fas fa-lightbulb",
            title: "Inovação Estratégica",
            description: "Identificamos oportunidades de inovação que geram vantagem competitiva para seu negócio."
        },
        {
            icon: "fas fa-coins",
            title: "Redução de Custos",
            description: "Otimizamos recursos e processos para maximizar a eficiência operacional."
        },
        {
            icon: "fas fa-shield-alt",
            title: "Gestão de Riscos",
            description: "Proteção do seu negócio com estratégias eficazes de segurança e compliance."
        },
        {
            icon: "fas fa-sync",
            title: "Transformação Digital",
            description: "Acompanhamento completo na jornada de modernização tecnológica."
        }
    ];

    return (
        <section id="beneficios" className="benefits-section">
            <h2>Benefícios para seu Negócio</h2>
            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                        <div className="benefit-icon">
                            <i className={benefit.icon}></i>
                        </div>
                        <h4>{benefit.title}</h4>
                        <p>{benefit.description}</p>
                    </div>
                ))}
                </div>
        </section>
    );
};

export default Benefits;
