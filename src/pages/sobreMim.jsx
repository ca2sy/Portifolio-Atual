export default function SobreMim() {
  return (
    <div className="relative bg-[#193555] text-white py-20 flex flex-col items-center overflow-hidden">

      {/* Gradiente de fundo simples e estático */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF99B6] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4DC1D7] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#00FFCC] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Emojis decorativos estáticos */}
      <div className="absolute top-10 left-10 text-6xl opacity-15">🎮</div>
      <div className="absolute top-20 right-20 text-5xl opacity-15">⭐</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-15">💎</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-15">🕹️</div>

      <h2 className="relative z-10 text-[#FF99B6] text-4xl md:text-6xl font-joystix mb-12 drop-shadow-[0_0_10px_#FF99B6]">
        <span className="animate-pulse">SOBRE MIM</span>
      </h2>

      <div className="relative z-10 bg-[#2a2a33] border-4 border-[#FF99B6] rounded-2xl shadow-[0_0_25px_#FF99B6] p-8 md:p-12 max-w-4xl w-[90%] flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-48 h-48 border-4 border-[#00FFCC] rounded-xl overflow-hidden shadow-[0_0_20px_#00FFCC] hover:scale-105 transition-transform duration-300">
          <img
            src="/image/eu.jpeg"
            alt="Rafaela Costa"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 border-2 border-[#00FFCC] rounded-xl animate-pulse pointer-events-none"></div>
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          <p className="text-lg md:text-xl font-sans leading-relaxed text-gray-200">
            Olá! <br />
            Eu sou{" "}
            <span className="text-[#FF99B6] font-bold drop-shadow-[0_0_8px_#FF99B6]">
              Rafaela Sousa Costa
            </span>
            , sou Engenheira de Software e tenho como objetivo encontrar soluções criativas através da tecnologia, além de explorar ainda mais essa área vasta, conhecendo cada dia algo novo para aprender.
          </p>

          <div className="mt-6 space-y-3">
            <div>
              <span className="text-[#00FFCC] font-joystix text-sm drop-shadow-[0_0_6px_#00FFCC]">
                LIDERANÇA
              </span>
              <div className="w-full bg-gray-700 rounded-full h-3 mt-1 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#FF99B6] to-[#FF6B9D] h-3 rounded-full w-[90%] relative"
                  style={{
                    animation: 'fillBar 2s ease-out',
                    boxShadow: '0 0 10px #FF99B6'
                  }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#00FFCC] font-joystix text-sm drop-shadow-[0_0_6px_#00FFCC]">
                COMUNICAÇÃO
              </span>
              <div className="w-full bg-gray-700 rounded-full h-3 mt-1 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#4DC1D7] to-[#2EA5BF] h-3 rounded-full w-[90%] relative"
                  style={{
                    animation: 'fillBar 2s ease-out 0.2s both',
                    boxShadow: '0 0 10px #4DC1D7'
                  }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#00FFCC] font-joystix text-sm drop-shadow-[0_0_6px_#00FFCC]">
                PROATIVIDADE
              </span>
              <div className="w-full bg-gray-700 rounded-full h-3 mt-1 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#00FFCC] to-[#00D9B3] h-3 rounded-full w-[100%] relative"
                  style={{
                    animation: 'fillBar 2s ease-out 0.4s both',
                    boxShadow: '0 0 10px #00FFCC'
                  }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from { width: 0%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}