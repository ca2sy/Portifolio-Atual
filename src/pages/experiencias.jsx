import { useState } from 'react';

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timeline = [
    { date: "MAR/2024", title: "Início da Jornada", desc: "Comecei Engenharia de Software no ICEV", icon: "🎓", color: "#FF99B6" },
    { date: "1º SEM/2024", title: "Co-fundadora Binat.ti", desc: "Ajudei a criar organização feminina na tecnologia: Binat.ti", icon: "💜", color: "#B384FF" },
    { date: "SET/2024", title: "Diretora de Pesquisa", desc: "LAESA - Guiando alunos em projetos e pesquisas", icon: "🔬", color: "#4DC1D7" },
    { date: "MAR/2025", title: "Líder de Turma", desc: "Escolhida para representar e liderar minha turma", icon: "👑", color: "#F0DB4F" },
    { date: "MAR/2025", title: "Criadora Papagaiando", desc: "App para comunicação de pessoas autistas", icon: "🦜", color: "#61DBFB" },
    { date: "MAR/2025", title: "Monitora de Engenharia de Software", desc: "Ensinando ciclo de produção de software", icon: "📖", color: "#3C873A" },
    { date: "MAI/2025", title: "Diretora de Comunicação", desc: "LAESA - Assumi também a comunicação", icon: "📢", color: "#38BDF8" },
    { date: "JUL/2025", title: "Monitora de POO", desc: "Ensinando Programação Orientada a Objetos em Java", icon: "☕", color: "#FF6B6B" },
    {date:"SET/2025", title: "Maratona de Programação ICPC", desc: "Participei da 30ª Maratona de Programação SBC de 2025", icon: "🎈", color: "#FF99B6"}
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#0d1b2a] via-[#193555] to-[#1b263b] py-20 px-6 overflow-hidden">

      {/* Gradiente de fundo simples e estático */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF99B6] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4DC1D7] rounded-full blur-3xl" />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-[#FF99B6] text-4xl md:text-6xl font-joystix mb-3 drop-shadow-[0_0_15px_#FF99B6]">
          ⏳ LINHA DO TEMPO
        </h2>
        <p className="text-[#4DC1D7] text-sm md:text-base font-joystix animate-pulse">
          Minha jornada até aqui
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Linha central da timeline */}
        <div 
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF99B6] via-[#4DC1D7] to-[#61DBFB]"
          style={{ transform: 'translateX(-50%)', opacity: 0.5 }}
        ></div>

        <div className="space-y-6">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Ícone central */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                      border: `3px solid ${item.color}`,
                      boxShadow: isHovered 
                        ? `0 0 25px ${item.color}, 0 0 50px ${item.color}60`
                        : `0 0 12px ${item.color}80`,
                      transform: isHovered ? 'scale(1.1) rotate(8deg)' : 'scale(1) rotate(0deg)'
                    }}
                  >
                    {item.icon}
                  </div>
                  
                  {/* Número do evento */}
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold font-joystix bg-[#0f1620]"
                    style={{
                      border: `2px solid ${item.color}`,
                      color: item.color,
                      boxShadow: `0 0 8px ${item.color}`
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Card de conteúdo */}
                <div
                  className={`ml-20 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} md:w-[46%] w-full`}
                >
                  <div
                    className="bg-gradient-to-br from-[#1a2332] to-[#0f1620] rounded-lg p-4 transition-all duration-300"
                    style={{
                      border: `2px solid ${item.color}40`,
                      boxShadow: isHovered
                        ? `0 0 25px ${item.color}60, 0 8px 30px rgba(0,0,0,0.4)`
                        : `0 0 10px ${item.color}30`,
                      transform: isHovered ? 'translateY(-3px)' : 'translateY(0)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="px-2 py-0.5 rounded text-xs font-joystix whitespace-nowrap"
                        style={{
                          background: `${item.color}20`,
                          color: item.color,
                          border: `1px solid ${item.color}60`
                        }}
                      >
                        {item.date}
                      </div>
                      <h3
                        className="text-white font-joystix text-sm md:text-base"
                        style={{
                          textShadow: `0 0 8px ${item.color}60`
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-2 h-0.5 rounded-full bg-[#0f1620] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: isHovered ? '100%' : '30%',
                          background: `linear-gradient(90deg, ${item.color}, transparent)`,
                          boxShadow: `0 0 8px ${item.color}`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
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