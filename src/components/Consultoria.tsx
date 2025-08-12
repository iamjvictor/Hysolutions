import React from 'react';
import './styles/Consultoria.css';

const Consultoria: React.FC = () => {
    const methodologySteps = [
        {
            icon: "fas fa-search",
            title: "Diagnóstico",
            description: "Análise profunda da sua infraestrutura e processos de TI para identificar oportunidades de melhoria."
        },
        {
            icon: "fas fa-tasks",
            title: "Planejamento",
            description: "Desenvolvimento de estratégias personalizadas alinhadas aos objetivos do seu negócio."
        },
        {
            icon: "fas fa-rocket",
            title: "Implementação",
            description: "Execução das soluções propostas com acompanhamento contínuo e ajustes necessários."
        },
        {
            icon: "fas fa-chart-line",
            title: "Resultados",
            description: "Monitoramento de métricas e otimização contínua para garantir o máximo retorno sobre o investimento."
        }
    ];
    

    return (
        <section id="consultoria" className="consulting-section">
            <div className="consulting-header">
                <h2>Consultoria Estratégica em TI</h2>
            </div>

            <div className="methodology-container">
                <div className="methodology-steps">
                    {methodologySteps.map((step, index) => (
                        <div key={index} className="methodology-card">
                            <div className="step-number">{index + 1}</div>
                            <div className="methodology-icon">
                                <i className={step.icon}></i>
                            </div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>          

            
        </section>
    );
};

export default Consultoria;
