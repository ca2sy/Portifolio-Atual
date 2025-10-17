
export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f1a2e] to-[#0a0f1a] py-8 px-6 border-t-2 border-[#00FFCC]/30">

      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: '3px',
            height: '3px',
            background: i % 2 === 0 ? '#FF99B6' : '#4DC1D7',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
            animation: `twinkle ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00FFCC]/50 to-transparent"></div>
          <div className="text-2xl">✨</div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00FFCC]/50 to-transparent"></div>
        </div>


        <div className="text-center space-y-4">

          <div>
            <h3 className="text-[#FF99B6] font-joystix text-lg mb-1" style={{ textShadow: '0 0 10px #FF99B680' }}>
              Rafaela Costa
            </h3>
            <p className="text-gray-400 text-sm">Engenheira de Software</p>
          </div>


          <div className="flex justify-center gap-6 text-sm">
            <a 
              href="https://www.linkedin.com/in/rafaela-sousa-costa-3920572bb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4DC1D7] hover:text-[#00FFCC] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="https://github.com/ca2sy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4DC1D7] hover:text-[#00FFCC] transition-colors duration-300"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="https://www.instagram.com/heycsy_/#"
              className="text-[#4DC1D7] hover:text-[#00FFCC] transition-colors duration-300"
            >
              Instagram
            </a>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs font-joystix">
              © 2025 Rafaela Costa 
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
      `}</style>
    </footer>
  );
}