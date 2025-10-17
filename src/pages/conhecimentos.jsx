
import { useState } from 'react';

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

      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-[#00FFCC]"
            style={{
              width: `${80 + Math.random() * 100}px`,
              height: `${80 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              animation: `rotate-hex ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

  
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-32 bg-gradient-to-r from-transparent via-[#FF99B6]/10 to-transparent blur-2xl animate-wave-1" style={{ top: '10%' }} />
        <div className="absolute w-full h-32 bg-gradient-to-r from-transparent via-[#4DC1D7]/10 to-transparent blur-2xl animate-wave-2" style={{ top: '40%' }} />
        <div className="absolute w-full h-32 bg-gradient-to-r from-transparent via-[#00FFCC]/10 to-transparent blur-2xl animate-wave-3" style={{ top: '70%' }} />
      </div>

   
      <div className="absolute top-1/4 right-10 w-64 h-64">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 rounded-full"
            style={{
              borderColor: i % 2 === 0 ? '#FF99B6' : '#4DC1D7',
              opacity: 0.2,
              transform: `scale(${1 + i * 0.3})`,
              animation: `pulse-circle ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute text-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle-star ${1 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0
          }}
        >
          {i % 4 === 0 ? '✦' : i % 4 === 1 ? '✧' : i % 4 === 2 ? '★' : '☆'}
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#FF99B6]/30 via-transparent to-[#FF99B6]/30 animate-beam-1" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-[#4DC1D7]/30 via-transparent to-[#4DC1D7]/30 animate-beam-2" />
        <div className="absolute left-0 top-1/3 w-full h-1 bg-gradient-to-r from-[#00FFCC]/20 via-transparent to-[#00FFCC]/20 animate-beam-3" />
      </div>


      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <line x1="10%" y1="15%" x2="25%" y2="30%" stroke="#00FFCC" strokeWidth="1" className="animate-pulse" />
        <line x1="25%" y1="30%" x2="40%" y2="25%" stroke="#FF99B6" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="70%" y1="20%" x2="85%" y2="40%" stroke="#4DC1D7" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <circle cx="10%" cy="15%" r="3" fill="#00FFCC" className="animate-pulse" />
        <circle cx="25%" cy="30%" r="3" fill="#FF99B6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="40%" cy="25%" r="3" fill="#4DC1D7" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <circle cx="70%" cy="20%" r="3" fill="#00FFCC" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        <circle cx="85%" cy="40%" r="3" fill="#FF99B6" className="animate-pulse" style={{ animationDelay: '2s' }} />
      </svg>

      
      <div className="absolute top-16 left-16 text-4xl opacity-30 animate-float-powerup">⚡</div>
      <div className="absolute top-32 right-24 text-3xl opacity-30 animate-float-powerup" style={{ animationDelay: '1s' }}>🔮</div>
      <div className="absolute bottom-24 left-32 text-3xl opacity-30 animate-float-powerup" style={{ animationDelay: '2s' }}>🎯</div>
      <div className="absolute bottom-16 right-16 text-4xl opacity-30 animate-float-powerup" style={{ animationDelay: '0.5s' }}>💠</div>


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
              animationDelay: `${index * 0.1}s`
            }}
          >
   
            <div
              className="bg-gradient-to-br from-[#1a2332] to-[#0f1620] rounded-xl p-4 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              style={{
                border: `2px solid ${skill.color}`,
                boxShadow: hoveredSkill === index 
                  ? `0 0 25px ${skill.color}, 0 8px 30px rgba(0,0,0,0.5)` 
                  : `0 0 12px ${skill.color}40`
              }}
            >

              <div 
                className="text-4xl mb-2 text-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125"
                style={{ 
                  color: skill.color,
                  filter: `drop-shadow(0 0 8px ${skill.color})`
                }}
              >
                {skill.icon}
              </div>

 
              <h3 
  className="text-white font-joystix text-center text-xs mb-2"
  style={{ textShadow: `0 0 8px ${skill.color}` }}
>
  {skill.name}
</h3>


              <div className="relative">
                <div className="bg-[#0f1620] h-2 rounded-full border border-white/20 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: hoveredSkill === index ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      boxShadow: `0 0 8px ${skill.color}`
                    }}
                  />
                </div>
                <span 
                  className="absolute -top-0.5 right-0 text-white font-joystix text-[10px]"
                  style={{ 
                    textShadow: `0 0 4px ${skill.color}`,
                    opacity: hoveredSkill === index ? 1 : 0,
                    transition: 'opacity 0.3s'
                  }}
                >
                  {skill.level}
                </span>
              </div>

              {hoveredSkill === index && (
                <div 
                  className="absolute inset-0 rounded-xl animate-pulse pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`
                  }}
                />
              )}
            </div>

    
            {hoveredSkill === index && (
              <>
                <div className="absolute -top-1 -right-1 text-lg animate-bounce" style={{ animationDelay: '0s' }}>⭐</div>
                <div className="absolute -top-2 -left-1 text-base animate-bounce" style={{ animationDelay: '0.2s' }}>✨</div>
                <div className="absolute -bottom-1 right-2 text-sm animate-bounce" style={{ animationDelay: '0.4s' }}>💫</div>
              </>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes rotate-hex {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes wave-1 {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        .animate-wave-1 {
          animation: wave-1 15s ease-in-out infinite;
        }

        @keyframes wave-2 {
          0%, 100% { transform: translateX(100%); }
          50% { transform: translateX(-100%); }
        }
        .animate-wave-2 {
          animation: wave-2 18s ease-in-out infinite;
        }

        @keyframes wave-3 {
          0%, 100% { transform: translateX(-50%); }
          50% { transform: translateX(150%); }
        }
        .animate-wave-3 {
          animation: wave-3 20s ease-in-out infinite;
        }

        @keyframes pulse-circle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.2); }
        }

        @keyframes twinkle-star {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        @keyframes beam-1 {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .animate-beam-1 {
          animation: beam-1 4s ease-in-out infinite;
        }

        @keyframes beam-2 {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .animate-beam-2 {
          animation: beam-2 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes beam-3 {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-beam-3 {
          animation: beam-3 6s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @keyframes float-powerup {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-30px) rotate(10deg); 
          }
        }
        .animate-float-powerup {
          animation: float-powerup 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}