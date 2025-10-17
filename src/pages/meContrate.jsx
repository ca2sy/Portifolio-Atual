import { useState } from 'react';

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const contacts = [
    {
      name: "LinkedIn",
      icon: "💼",
      color: "#0A66C2",
      link: "https://www.linkedin.com/in/rafaela-sousa-costa-3920572bb",
      description: "Conecte-se comigo"
    },
    {
      name: "GitHub",
      icon: "🐙",
      color: "#6e5494",
      link: "https://github.com/ca2sy",
      description: "Veja meus projetos"
    },
    {
      name: "Currículo",
      icon: "📄",
      color: "#FF99B6",
      link: "/pdf/Currículo.pdf",
      download: true,
      description: "Baixe meu Currículo"
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#193555] via-[#1a2f4a] to-[#0f1a2e] py-20 px-6 overflow-hidden">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#00FFCC 1px, transparent 1px), linear-gradient(90deg, #00FFCC 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

   
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF99B6]/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4DC1D7]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#00FFCC]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            background: i % 3 === 0 ? '#FF99B6' : i % 3 === 1 ? '#4DC1D7' : '#00FFCC',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.4,
            animation: `float-particle ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      <div className="absolute top-16 left-10 text-5xl opacity-20 animate-bounce">📬</div>
      <div className="absolute top-24 right-20 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>💌</div>
      <div className="absolute bottom-24 left-24 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>🚀</div>
      <div className="absolute bottom-16 right-16 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }}>✉️</div>


      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-24 bg-gradient-to-r from-transparent via-[#FF99B6]/10 to-transparent blur-xl animate-wave-slow" style={{ top: '30%' }} />
        <div className="absolute w-full h-24 bg-gradient-to-r from-transparent via-[#4DC1D7]/10 to-transparent blur-xl animate-wave-slow" style={{ top: '60%', animationDelay: '2s' }} />
      </div>


      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-[#00FFCC] text-4xl md:text-6xl font-joystix mb-4 drop-shadow-[0_0_20px_#00FFCC]">
            💬 ME CONTRATE
          </h2>

          <div className="mt-4 text-gray-300 text-base">
            Disponível para <span className="text-[#00FFCC] font-bold">oportunidades fixas</span> e <span className="text-[#FF99B6] font-bold">projetos freelancer</span>
          </div>
        </div>

     
        <div 
          className="bg-gradient-to-br from-[#1e2838]/90 to-[#0f1620]/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-[#00FFCC]/40 shadow-[0_0_40px_#00FFCC40]"
          style={{
            animation: 'fadeInScale 0.8s ease-out'
          }}
        >
    
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #00FFCC, transparent)',
              boxShadow: '0 0 20px #00FFCC'
            }}
          />


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contacts.map((contact, index) => {
              const isHovered = hoveredButton === index;
              
              return (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.download ? undefined : "_blank"}
                  rel={contact.download ? undefined : "noopener noreferrer"}
                  download={contact.download}
                  onMouseEnter={() => setHoveredButton(index)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="relative group"
                  style={{
                    animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div
                    className="relative bg-gradient-to-br from-[#2a3444] to-[#1a2332] rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden"
                    style={{
                      border: `3px solid ${contact.color}`,
                      boxShadow: isHovered
                        ? `0 0 35px ${contact.color}, 0 10px 40px rgba(0,0,0,0.5)`
                        : `0 0 15px ${contact.color}60, 0 4px 20px rgba(0,0,0,0.3)`,
                      transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                    }}
                  >
              
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${contact.color}20, transparent 70%)`
                      }}
                    />

   
                    <div className="relative flex items-center gap-4">
                  
                      <div
                        className="text-5xl transition-all duration-300"
                        style={{
                          filter: `drop-shadow(0 0 15px ${contact.color})`,
                          transform: isHovered ? 'scale(1.2) rotate(10deg)' : 'scale(1)'
                        }}
                      >
                        {contact.icon}
                      </div>

 
                      <div className="flex-1">
                        <h3
                          className="font-joystix text-lg mb-1 transition-all duration-300"
                          style={{
                            color: contact.color,
                            textShadow: `0 0 10px ${contact.color}80`,
                            transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
                          }}
                        >
                          {contact.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {contact.description}
                        </p>
                      </div>

         
                      <div
                        className="text-2xl transition-all duration-300"
                        style={{
                          color: contact.color,
                          transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                          opacity: isHovered ? 1 : 0.5
                        }}
                      >
                        →
                      </div>
                    </div>

        
                    <div 
                      className="absolute bottom-0 left-0 h-1 rounded-full transition-all duration-500"
                      style={{
                        width: isHovered ? '100%' : '0%',
                        background: `linear-gradient(90deg, ${contact.color}, transparent)`,
                        boxShadow: `0 0 10px ${contact.color}`
                      }}
                    />
                  </div>

                  {isHovered && (
                    <div 
                      className="absolute -top-2 -right-2 text-xl animate-bounce"
                      style={{ color: contact.color }}
                    >
                      ✨
                    </div>
                  )}
                </a>
              );
            })}
          </div>



          <div className="mt-8 text-center">
            <div className="inline-block px-6 py-3 bg-[#00FFCC]/10 border-2 border-[#00FFCC]/40 rounded-full">
              <p className="text-[#00FFCC] font-joystix text-sm">
             ~ Vamos Trabalhar Juntos! ~
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) translateX(15px);
            opacity: 0.6;
          }
        }

        @keyframes wave-slow {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        .animate-wave-slow {
          animation: wave-slow 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}