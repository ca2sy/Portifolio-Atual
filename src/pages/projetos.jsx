import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Papagaiando",
      description: "App para comunicação de pessoas autistas. Em fase de testes com sistema de cadastro, login, perfis de usuários e criação de botões personalizados.",
      icon: "🦜",
      color: "#61DBFB",
      gradient: "from-[#61DBFB] to-[#4BA5C8]",
      links: [
        { label: "Repositório Backend", url: "https://github.com/ca2sy/Backend-Papagaiando-" },
        { label: "Repositório Frontend", url: "https://github.com/ca2sy/Front-Papagaiando" }
      ]
    },
    {
      name: "Sistema de Reclamações",
      description: "Atividade realizada para teste de estágio. Sistema completo com front e back conectado ao banco de dados, incluindo login, cadastro e registro de reclamações.",
      icon: "📢",
      color: "#FF6B6B",
      gradient: "from-[#FF6B6B] to-[#E05555]",
      links: [
        { label: "Repositório", url: "https://github.com/ca2sy/Sistema-de-Reclamacoes" }
      ]
    },
    {
      name: "Simulador de Coleta de Lixo",
      description: "Avaliação onde simulei coleta de lixo resolvendo problemas dados, implementando estruturas de dados em Java do zero.",
      icon: "♻️",
      color: "#3C873A",
      gradient: "from-[#3C873A] to-[#2D6A2C]",
      links: [
        { label: "Repositório", url: "https://github.com/ca2sy/Simulacao-de-coleta-de-lixo" }
      ]
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#0f1a2e] via-[#193555] to-[#0f1a2e] py-20 px-6 overflow-hidden">

      {/* Gradiente de fundo simples e estático */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF99B6] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4DC1D7] rounded-full blur-3xl" />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-[#FF99B6] text-4xl md:text-6xl font-joystix mb-4 drop-shadow-[0_0_15px_#FF99B6]">
          💼 PROJETOS
        </h2>
        <p className="text-[#4DC1D7] text-lg font-joystix animate-pulse">
          ~ Meus trabalhos desenvolvidos ~
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => {
          const isHovered = hoveredProject === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div
                className="relative bg-gradient-to-br from-[#1e2838] to-[#0f1620] rounded-2xl p-6 transition-all duration-300 h-full flex flex-col"
                style={{
                  border: `2px solid ${project.color}40`,
                  boxShadow: isHovered
                    ? `0 0 30px ${project.color}80, 0 10px 40px rgba(0,0,0,0.5)`
                    : `0 0 10px ${project.color}30, 0 4px 15px rgba(0,0,0,0.3)`,
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                  }}
                />

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="text-5xl transition-transform duration-300"
                    style={{
                      filter: `drop-shadow(0 0 12px ${project.color})`,
                      transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1)'
                    }}
                  >
                    {project.icon}
                  </div>
                  <h3
                    className="text-white font-joystix text-lg flex-1"
                    style={{
                      textShadow: `0 0 10px ${project.color}60`
                    }}
                  >
                    {project.name}
                  </h3>
                </div>

                <div 
                  className="h-0.5 mb-4 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, transparent)`
                  }}
                />

                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 rounded-lg font-joystix text-sm text-center transition-all duration-300 hover:scale-105 group"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                        border: `2px solid ${project.color}`,
                        color: project.color,
                        boxShadow: `0 0 15px ${project.color}40`
                      }}
                    >
                      <span className="group-hover:tracking-wider transition-all duration-300">
                        [ {link.label.toUpperCase()} ]
                      </span>
                    </a>
                  ))}
                </div>

                {isHovered && (
                  <div 
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 60%)`,
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  />
                )}
              </div>

              {isHovered && (
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                  ✨
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}