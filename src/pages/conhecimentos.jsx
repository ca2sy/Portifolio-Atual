import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "Java", color: "#FF99B6", icon: "☕", level: 90 },
    { name: "Spring Boot", color: "#4DC1D7", icon: "🌱", level: 85 },
    { name: "Python", color: "#F0DB4F", icon: "🐍", level: 80 },
    { name: "MySQL", color: "#00758F", icon: "🛢️", level: 85 },
    { name: "PostgreSQL", color: "#336791", icon: "🐘", level: 85 },
    { name: "JavaScript", color: "#F7DF1E", icon: "📜", level: 85 },
    { name: "React", color: "#61DBFB", icon: "⚛️", level: 80 },
    { name: "Node.js", color: "#3C873A", icon: "🟢", level: 85 },
    { name: "HTML", color: "#E44D26", icon: "📄", level: 85 },
    { name: "CSS", color: "#264DE4", icon: "🎨", level: 80 },
    { name: "Tailwind", color: "#38BDF8", icon: "💨", level: 80 },
    { name: "Git/GitHub", color: "#F1502F", icon: "🐙", level: 85 },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#1a2f4a] via-[#193555] to-[#0f1f35] py-20 px-6 overflow-hidden">
      {/* Gradiente de fundo simples e estático */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF99B6] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4DC1D7] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00FFCC] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Apenas alguns emojis decorativos estáticos */}
      <div className="absolute top-16 left-16 text-4xl opacity-20">⚡</div>
      <div className="absolute top-32 right-24 text-3xl opacity-20">🔮</div>
      <div className="absolute bottom-24 left-32 text-3xl opacity-20">🎯</div>
      <div className="absolute bottom-16 right-16 text-4xl opacity-20">💠</div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-[#FF99B6] text-4xl md:text-6xl font-joystix mb-4 drop-shadow-[0_0_15px_#FF99B6]">
          ✨ SKILLS UNLOCKED ✨
        </h2>
        <p className="text-[#4DC1D7] text-xl font-joystix animate-pulse">
          ~ Minhas habilidades ~
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 relative z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="relative group cursor-pointer"
            style={{
              animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div
              className="bg-gradient-to-br from-[#1a2332] to-[#0f1620] rounded-xl p-4 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              style={{
                border: `2px solid ${skill.color}`,
                boxShadow:
                  hoveredSkill === index
                    ? `0 0 25px ${skill.color}, 0 8px 30px rgba(0,0,0,0.5)`
                    : `0 0 12px ${skill.color}40`,
              }}
            >
              <div
                className="text-4xl mb-2 text-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125"
                style={{
                  color: skill.color,
                  filter: `drop-shadow(0 0 8px ${skill.color})`,
                }}
              >
                {skill.icon}
              </div>

              <h3
                className="text-white font-joystix text-center text-[10px] md:text-xs mb-2 break-words truncate"
                style={{ textShadow: `0 0 8px ${skill.color}` }}
              >
                {skill.name}
              </h3>

              <div className="relative">
                <div className="bg-[#0f1620] h-2 rounded-full border border-white/20 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: hoveredSkill === index ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      boxShadow: `0 0 8px ${skill.color}`,
                    }}
                  />
                </div>
                <span
                  className="absolute -top-0.5 right-0 text-white font-joystix text-[10px]"
                  style={{
                    textShadow: `0 0 4px ${skill.color}`,
                    opacity: hoveredSkill === index ? 1 : 0,
                    transition: "opacity 0.3s",
                  }}
                >
                  {skill.level}
                </span>
              </div>

              {hoveredSkill === index && (
                <div
                  className="absolute inset-0 rounded-xl animate-pulse pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                  }}
                />
              )}
            </div>

            {hoveredSkill === index && (
              <>
                <div
                  className="absolute -top-1 -right-1 text-lg animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  ⭐
                </div>
                <div
                  className="absolute -top-2 -left-1 text-base animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  ✨
                </div>
                <div
                  className="absolute -bottom-1 right-2 text-sm animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                >
                  💫
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}